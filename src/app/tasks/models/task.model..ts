export interface Task {
  name: string;
  status: string;
}

export interface TaskStatus {
    name: string
    label: string;
    showAddCardForm: boolean;
}