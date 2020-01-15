import { TENANTGUID, APIENDPOINT, API_URL } from '@core/constants/main';

export const environment = {
  production: false,
  GetTasks: `${API_URL}/odata/tasks?tenantguid=${TENANTGUID}`,
  Priorities: APIENDPOINT + 'Priorities',
  AddTask: APIENDPOINT + 'Tasks'
//  Token_Endpoint: globalEndPoint.AuthEndPoint + '/connect/token',
};