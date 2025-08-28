export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  completedAt: string;
  priority: TaskPriority;
  group: TaskGroup;
}

export type TaskPriority = 'baixa' | 'média' | 'alta';

export type TaskGroup = 'casa' | 'trabalho' | 'estudos';

export interface CreateTaskData {
  title: string;
  description: string;
  priority: TaskPriority;
  group: TaskGroup;
}

export interface UpdateTaskData extends Partial<CreateTaskData> {
  completed?: boolean;
}
