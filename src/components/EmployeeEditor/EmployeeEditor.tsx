import React from 'react';

import './EmployeeEditor.css';
import { useParams } from 'react-router-dom';

export interface EmployeeEditorProps {
  prop?: string;
}

export function EmployeeEditor() {
  const { id } = useParams()
  console.log(id);
  return <div>EmployeeEditor </div>;
}
