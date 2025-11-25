'use client';
import { useCallback, useRef, useState } from 'react';
import { EventsRPC } from '@/client';
import type { VovkIteration, VovkOutput } from 'vovk';

export default function EventsExample() {
  const [eventPayload, setEventPayload] = useState<VovkIteration<typeof EventsRPC.streamEvents>['payload'] | null>(null);
  const [eventName, setEventName] = useState<VovkIteration<typeof EventsRPC.streamEvents>['event'] | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const streamEvents = useCallback(async () => {
    abortControllerRef.current?.abort();
    try {
      while (true) {
        using events = await EventsRPC.streamEvents();
        abortControllerRef.current = events.abortController;

        for await (const { event, payload } of events) {
          setEventName(event);
          setEventPayload(payload);
        }
      }
    } catch (error) {
      if ((error as { cause?: Error }).cause?.name === 'AbortError') {
        console.log('Streaming aborted');
      } else {
        console.error('Error while streaming events:', error);
      }
    }
  }, []);

  return (
    <div>
      <button onClick={streamEvents}>Stream Events</button>
      <br /><br />
      <h2>Latest Event:</h2>
      <pre>{eventName || 'No event yet'}</pre>
      <br />
      <h2>Event Payload:</h2>
      <pre>{eventPayload ? JSON.stringify(eventPayload, null, 2) : 'No payload yet'}</pre>
    </div>
  );
}
