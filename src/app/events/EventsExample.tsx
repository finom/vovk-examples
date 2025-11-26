'use client';
import { useCallback, useRef, useState } from 'react';
import { EventsRPC } from '@/client';
import type { VovkIteration, VovkOutput } from 'vovk';

export default function EventsExample() {
  const [eventPayload, setEventPayload] = useState<VovkIteration<typeof EventsRPC.streamEvents>['payload'] | null>(null);
  const [eventName, setEventName] = useState<VovkIteration<typeof EventsRPC.streamEvents>['event'] | null>(null);
  const abortRef = useRef<() => void | null>(null);

  const streamEvents = useCallback(async () => {
    abortRef.current?.();
      while (true) {
        using events = await EventsRPC.streamEvents();
        abortRef.current = events.abortWithoutError;
        for await (const { event, payload } of events) {
          setEventName(event);
          setEventPayload(payload);
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
