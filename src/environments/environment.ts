import { TENANTGUID, APIENDPOINT, API_URL } from '@core/constants/main';

export const environment = {
  production: false,
  GetTasks: `${API_URL}/odata/tasks?tenantguid=${TENANTGUID}`,
  Priorities: APIENDPOINT + 'Priorities',
  Task: APIENDPOINT + 'Tasks',
  TaskById: APIENDPOINT + 'Tasks/',
  Statuses: APIENDPOINT + 'Statuses',
  Users: APIENDPOINT + 'Users'
//  Token_Endpoint: globalEndPoint.AuthEndPoint + '/connect/token',
};