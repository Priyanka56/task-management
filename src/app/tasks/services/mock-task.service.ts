export class MockTaskService {
  public static updatedTasks = [
    {
      name: 'Pay electricity bill',
      status: 'TO_DO',
    },
    {
      name: 'Iron clothes',
      status: 'IN_PROGRESS',
    },
    {
      name: 'Buy running shoes',
      status: 'DONE',
    },
    {
      name: 'Make grocery list',
      status: 'TO_DO',
    },
    {
      name: 'Buy vegetables',
      status: 'IN_PROGRESS',
    },
    {
      name: 'Pay Light Bill',
      status: 'TO_DO',
    },
  ];
  public static updatedTaskStatuses = [
    {
      name: 'TO_DO',
      label: 'TO DO',
      showAddCardForm: false,
    },
    {
      name: 'IN_PROGRESS',
      label: 'IN PROGRESS',
      showAddCardForm: false,
    },
    {
      name: 'DONE',
      label: 'DONE',
      showAddCardForm: false,
    },
    {
      name: 'PARTIALLY_DONE',
      label: 'Partially Done',
      showAddCardForm: false,
    },
  ];
  public static statusItemFound = {
    name: 'DONE',
    label: 'DONE',
    showAddCardForm: false,
  };

  public static originalStatusList = [
    {
      name: 'TO_DO',
      label: 'TO DO',
      showAddCardForm: false,
    },
    {
      name: 'IN_PROGRESS',
      label: 'IN PROGRESS',
      showAddCardForm: false,
    },
    {
      name: 'DONE',
      label: 'DONE',
      showAddCardForm: false,
    },
    {
      name: 'DONE',
      label: 'DONE',
      showAddCardForm: false,
    },
  ];

  public static filteredTasks = [
    {
      name: 'Pay electricity bill',
      status: 'TO_DO',
    },

    {
      name: 'Make grocery list',
      status: 'TO_DO',
    },

    {
      name: 'Pay Light Bill',
      status: 'TO_DO',
    },
  ];
}
