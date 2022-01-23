import React from 'react';

import styles from './CourseGoalItem.module.scss';

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className={styles.goal_item} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
