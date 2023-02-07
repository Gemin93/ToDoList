export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  owner: string | undefined;
}
