import { AddNewTodo } from '@/components/addNewTodo';
import Filter from '@/components/filter/Filter';
import { TodoList } from '@/components/todoList';
import { getAllTodos } from '@/lib';

import styles from './page.module.scss';

interface HomePageProps {
  searchParams: {
    filter: 'active' | 'completed' | undefined;
  };
}
console.log('test');
const Home = ({ searchParams }: HomePageProps) => {
  const todos = getAllTodos();
  const filterParam = !searchParams.filter ? null : searchParams.filter;
  return (
    <div className={styles.root}>
      <div className={styles.addTodo}>
        <AddNewTodo />
      </div>
      <div className={styles.todoList}>
        {/* @ts-expect-error Async Server Component */}
        <TodoList todos={todos} filter={filterParam} />
      </div>
      <div className={styles.filter}>
        <Filter />
      </div>
    </div>
  );
};

export default Home;
