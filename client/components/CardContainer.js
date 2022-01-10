import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCardsActionCreator } from '../actions/actions';
import InterestedCard from './InterestedCard';
import PendingCard from './PendingCard';
import OfferedCard from './OfferedCard';
import ArchiveCard from './ArchiveCard';

export default function CardContainer() {
  // const dispatch = useDispatch();
  // const cardDetails = useSelector((state) => state);
  const cardDetails = [
    {
      id: 1,
      title: 'Interested',
      status: 'Interested',
    },
    {
      id: 1,
      title: 'Interested2',
      status: 'Interested',
    },
    {
      id: 2,
      title: 'Pending',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Pending2',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Offered',
      status: 'Offered',
    },
    {
      id: 3,
      title: 'Offered2',
      status: 'Offered',
    },
    {
      id: 4,
      title: 'Archive',
      status: 'Archive',
    },
    {
      id: 4,
      title: 'Archive2',
      status: 'Archive',
    },
  ]

  // useEffect(() => {
  //   dispatch(getCardsActionCreator(cardDetails));
  //   //make sure to change this to whatever the data looks like
  // });
  const interested = [];
  const pending = [];
  const offered = [];
  const archive = [];
  const interestedCards = cardDetails.filter((card) => (
    card.status === 'Interested'
  ));
  interested.push(interestedCards)
  console.log(interestedCards);

  const pendingCards = cardDetails.filter((card) => (
    card.status === 'Pending'
  ))
  pending.push(pendingCards);

  const offeredCards = cardDetails.filter((card) => (
    card.status === 'Offered'
  ))
offered.push(offeredCards);

  const archiveCards = cardDetails.filter((card) => (
    card.status === 'Archive'
  ))
archive.push(archiveCards);

  return (
    <div id='cardList-container'>
      {interested.map((card) => {
        return <InterestedCard card={card} />
      })}
      {pending.map((card) => {
        return <PendingCard card={card} />
      })}
      {offered.map((card) => {
        return <OfferedCard card={card} />
      })}
      {archive.map((card) => {
        return <ArchiveCard card={card} />
      })}
    </div>
  )
}
