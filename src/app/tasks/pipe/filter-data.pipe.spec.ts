import { MockTaskService } from '../services/mock-task.service';
import { FilterDataPipe } from './filter-data.pipe';

describe('FilterDataPipe', () => {
  const pipe = new FilterDataPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter array based on status string', () => {
    expect(pipe.transform(MockTaskService.updatedTasks,'status', 'TO_DO')).toEqual(MockTaskService.filteredTasks);
  });

});
