import React from 'react';
import { Divider, Skeleton, Alert } from "antd";
import './styles/index.css';

interface Props {
  title: string,
  error?: boolean,
  amount?: number
}

export const ListingsSkeleton = ({ title, error = false, amount }: Props) => {
  const errorAlert = error ?
      <Alert type="error" message='Uh no! Something went wrong with deleting - please try again later :('
             className="listings-skeleton__alert"/> : null;

  return <div className='listings-skeleton'>
    {errorAlert}
    <h2>{title}</h2>
    {[...Array(amount)].map((x, index, { length }) =>
        <div key={index}>
          <Skeleton avatar={{ shape: 'square', size: 128 }} active paragraph={{ rows: 1 }}/>
          {(length - 1 === index) ? null : <Divider/>}
        </div>
    )}
  </div>
}
