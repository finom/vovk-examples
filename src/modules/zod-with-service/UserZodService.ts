import type { VovkBody, VovkOutput, VovkParams, VovkQuery } from 'vovk';
import type UserZodWithServiceController from './UserZodWithServiceController.ts';

export default class UserZodService {
  static updateUser(
    body: VovkBody<typeof UserZodWithServiceController.updateUser>,
    query: VovkQuery<typeof UserZodWithServiceController.updateUser>,
    params: VovkParams<typeof UserZodWithServiceController.updateUser>
  ) {
    // perform DB operations or other business logic here
    console.log(body, query, params);
    return { success: true, id: params.id } satisfies VovkOutput<typeof UserZodWithServiceController.updateUser>;
  }
}
