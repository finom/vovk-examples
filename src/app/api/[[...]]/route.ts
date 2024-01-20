import HelloController from '../../../vovk/hello/HelloController';
import HelloWorkerService from '../../../vovk/hello/HelloWorkerService';
import { initVovk } from 'vovk';

export const { GET, POST, PUT, DELETE } = initVovk({
  controllers: [HelloController],
  workers: [HelloWorkerService],
  async onMetadata(metadata, write) {
    if (process.env.NODE_ENV === 'development') {
      const [fs, path] = await Promise.all([import('fs/promises'), import('path')]);
      const metadataPath = path.join(
        __dirname.replace('.next/server/app', 'src/vovk'),
        '../../vovk-metadata.json'
      );

      await write(metadataPath, metadata, { fs, path });
    }
  },
});
