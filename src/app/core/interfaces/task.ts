export interface Task {
    createdAt: string;
    description: string;
    executorGroupId: number;
    executorGroupName: string;
    executorId: number;
    executorName: string;
    id: number;
    initiatorId: number;
    initiatorName: string;
    lifetimeItems: [];
    name: string;
    price: null;
    priorityId: number;
    priorityName: string;
    resolutionDatePlan: [];
    serviceId: number;
    serviceName: string;
    statusId: number;
    statusName: string;
    statusRgb: string;
    tags: [];
    taskTypeId: number;
    taskTypeName: string;
    updatedAt: string;
    comment?: string;
}