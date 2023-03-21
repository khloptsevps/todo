// import { Todo } from '@/types/Todo';

export const addNewTodo = async (value: string) => {
  await fetch(
    `http://${process.env.NEXT_PUBLIC_MOCK_API_TOKEN}.mockapi.io/api/v1/todos/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: value,
        completed: false,
      }),
    },
  );
};
