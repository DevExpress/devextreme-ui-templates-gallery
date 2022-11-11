import React, { useState, useCallback } from 'react';

import DataGrid, { Selection, RowDragging, Column } from 'devextreme-react/data-grid';

import { RowDraggingReorderEvent } from 'devextreme/ui/data_grid';

import { withLoadPanel } from '../../shared/utils/withLoadPanel';

import { Task } from '../../shared/types/task';

import './CardTasks.scss';

const selectionFilter = [['done', '=', true]];

const Grid = ({ tasks }: { tasks: Task[] }) => {
  const [gridData, setGridData] = useState(tasks);

  const onReorder = useCallback((e: RowDraggingReorderEvent) => {
    const visibleRows = e.component.getVisibleRows();
    const toIndex = gridData.indexOf(visibleRows[e.toIndex].data);
    const fromIndex = gridData.indexOf(e.itemData);

    setGridData([
      ...gridData.slice(0, fromIndex),
      ...gridData.slice(fromIndex + 1, toIndex + 1),
      e.itemData,
      ...gridData.slice(toIndex + 1)
    ]);
  }, [gridData]);

  return (
    <DataGrid
      dataSource={gridData}
      columnAutoWidth
      selectionFilter={selectionFilter}
    >
      <Selection mode='multiple' deferred />

      <RowDragging
        allowReordering
        onReorder={onReorder}
        showDragIcons
      />

      <Column
        dataField='text'
        caption='Subject'
        hidingPriority={3}
      />
      <Column
        dataField='date'
        dataType='date'
        caption='Due Date'
        hidingPriority={1}
      />
      <Column
        caption='Assigned To'
        dataField='manager'
        hidingPriority={0}
      />
    </DataGrid>
  );
};

const GridWithLoadPanel = withLoadPanel(Grid);

export const CardTasks = ({ tasks }: { tasks?: Task[] }) => {
  return (
    <div className='card-tasks'>
      <GridWithLoadPanel
        tasks={tasks?.filter((item) => !!item.status && !!item.priority)}
        loading={!tasks}
        panelProps={{
          container: '.card-tasks',
          position: { of: '.card-tasks' }
        }}
      />
    </div>
  );
};
