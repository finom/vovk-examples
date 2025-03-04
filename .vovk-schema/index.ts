// auto-generated 2025-03-04T15:07:38.884Z
import type { VovkSegmentSchema, VovkStrictConfig } from 'vovk';
import config from './config.json';
import segment0 from './segments/_root.json';
import segment1 from './segments/static.json';
const fullSchema = {
  config: config as unknown as Partial<VovkStrictConfig>,
  segments: {
    '': segment0 as unknown as VovkSegmentSchema,
    'static': segment1 as unknown as VovkSegmentSchema,
  }
};
export default fullSchema;