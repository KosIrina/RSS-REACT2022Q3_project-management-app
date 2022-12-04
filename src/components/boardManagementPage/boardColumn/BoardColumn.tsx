import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { useTranslation } from 'react-i18next';
import { TaskList } from '../taskList';
import { TColumn } from 'models/types';
import { TSnackBarState } from 'components/common/customSnackbar/types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ColumnHeader from './header/ColumnHeader';

import grey from '@mui/material/colors/grey';
import styles from './BoardColumn.module.scss';

type TBoardColumnProps = TColumn & {
  showSnackMessage: React.Dispatch<React.SetStateAction<TSnackBarState>>;
  deleteColumn: (columnId: string) => void;
};

function BoardColumn({
  _id: id,
  title,
  order,
  items,
  showSnackMessage,
  deleteColumn,
}: TBoardColumnProps) {
  const { t } = useTranslation('board-management-page');
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
    data: {
      type: 'column',
      columnId: 'root',
    },
  });

  const handleDeleteColumn = () => {
    deleteColumn(id);
  };

  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        ref={setNodeRef}
        className={styles.column}
        sx={{
          transform: CSS.Transform.toString(transform),
          transition,
          cursor: isDragging ? 'grabbing' : 'grab',
          backgroundColor: isDragging ? grey[300] : grey[200],
        }}
        {...listeners}
        {...attributes}
      >
        <ColumnHeader
          label={title}
          showSnackMessage={showSnackMessage}
          deleteColumn={handleDeleteColumn}
        />
        order = {order}
        {!!items?.length && <TaskList items={items} columnId={id} />}
        <Box p={1}>
          <Button size="small" color="secondary" variant="contained">
            + {t('addTask')}
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default BoardColumn;
