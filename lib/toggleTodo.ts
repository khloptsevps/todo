export const toggleTodo = async (id: string, completed: boolean) => {
  await fetch(
    `https://${process.env.NEXT_PUBLIC_MOCK_API_TOKEN}.mockapi.io/api/v1/todos/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    },
  );
};
