import React from "react";
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from "react-apollo";

import List from 'antd/es/list';
import { Avatar, Button, Spin, Alert } from 'antd';

import { Listings as ListingsData } from './__generated__/Listings';
import { DeleteListing as DeleteListingData, DeleteListingVariables } from './__generated__/DeleteListing';

import './styles/Listings.css'
import { ListingsSkeleton } from "./components/ListingsSkeleteon";

const LISTINGS = gql`
    query Listings {
        listings {
            id
            title
            image
            address
            price
            numOfGuests
            numOfBeds
            numOfBaths
            rating
        }
    }
`;

const DELETE_LISTING = gql`
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const { data, loading, refetch, error } = useQuery<ListingsData>(LISTINGS);

  const [deleteListing, {
    loading: deleteListingLoading,
    error: deleteListingError
  }] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

  const handleDeleteListing = async (id: string) => {
    await deleteListing({ variables: { id } });
    refetch();
  }

  const listings = data?.listings;
  const listingsMap = listings ? (

      <List
          itemLayout="horizontal"
          dataSource={listings}
          renderItem={listing => (
              <List.Item
                  className="listings__item"
                  actions={[<Button
                      type="primary"
                      onClick={() => handleDeleteListing(listing.id)}>Delete</Button>]}>
                <List.Item.Meta
                    title={`${listing.title} - ${listing.price}$`}
                    description={listing.address}
                    avatar={<Avatar size={128} shape={'square'} src={listing.image}/>}
                />
              </List.Item>
          )}>
      </List>
  ) : null;

  if (error) {
    return (
        <div className="listings">
          <ListingsSkeleton
              title={title}
              amount={4}
              error/>
        </div>
    )
  }

  if (loading) {
    return <div className="listings"><ListingsSkeleton amount={4} title={title}/></div>;
  }

  const deleteListingErrorMessage = deleteListingError ?
      <Alert
          type='error'
          message='Uh no! Something went wrong with deleting - please try again later :('
          className='listings__alert'
      /> : null;

  return (
      <section className="listings">
        <Spin spinning={deleteListingLoading}>
          {deleteListingErrorMessage}
          <h1 className="ant-typography">{title}</h1>
          {listingsMap}
        </Spin>
      </section>
  );
}
