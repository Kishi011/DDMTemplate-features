import { useTaskContext } from '@/src/hooks';
import { TaskList } from '@/src/organisms';
import { PageTemplate } from '@/src/templates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';

export const TaskListScreen: React.FC = () => {
  const {
    tasks,
    refreshing,
    toggleTaskCompletion,
    deleteTask,
    onRefresh,
    getTaskStats,
  } = useTaskContext();

  const stats = getTaskStats();


  useEffect(() => {
    const mostrarNotificacao = async () => {
      try {
        const jaMostrado = await AsyncStorage.getItem('@tasksNotificationShown');
        if (jaMostrado) return;

        setTimeout(async () => {
          const abertas = tasks.filter(t => !t.completed).map(t => t.title);
          if (abertas.length > 0) {
            await Notifications.scheduleNotificationAsync({
              content: {
                title: '📝 Tasks em aberto',
                body: abertas.join('\n'),
              },
              trigger: null,
            });
          }

          await AsyncStorage.setItem('@tasksNotificationShown', 'true');
        }, 100);
      } catch (error) {
        console.error('Erro ao exibir notificação de tasks:', error);
      }
    };

    mostrarNotificacao();
  }, [tasks]);

  return (
    <PageTemplate
      title="Minhas Tarefas"
      subtitle={`${stats.pending} pendentes de ${stats.total}`}
    >
      <TaskList
        tasks={tasks}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onToggleComplete={toggleTaskCompletion}
        onDeleteTask={deleteTask}
      />
    </PageTemplate>
  );
};
