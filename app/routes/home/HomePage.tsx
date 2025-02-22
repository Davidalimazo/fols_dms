import React from 'react';
import { Button } from '~/components/ui/button';

export default function HomePage() {
  return (
    <div
      className='font-light text-4xl'
      onClick={() => {
        console.log('Hello World');
      }}>
      <Button
        className='cursor-pointer'
        onClick={() => {
          console.log('Hello World');
        }}>
        Hello World
      </Button>
    </div>
  );
}
