import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { breadCrumbsObj } from '~/lib/utils';

export default function DmsLayout({ children }: { children: React.ReactNode }) {
  let pathname: Array<string> = [];
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname.split('/').filter((e) => e.length !== 0);
  }
  return (
    <div className='overflow-hidden'>
      <nav
        className='overflow-hidden flex flex-row items-start justify-between px-8 py-6 sm:h-[200px] md:h-[330px] bg-no-repeat sm:bg-contain md:bg-cover'
        style={{ backgroundImage: 'url("/images/banner.png")' }}>
        <div className='text-white'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/' className='font-bold'>
                  HOME
                </BreadcrumbLink>
              </BreadcrumbItem>

              {pathname.length > 0 ? <BreadcrumbSeparator /> : ''}
              {pathname &&
                pathname.map((e, i) => (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/${e}`} className='font-bold'>
                        {breadCrumbsObj[e as keyof typeof breadCrumbsObj]}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {pathname[i + 1] ? <BreadcrumbSeparator /> : ''}
                  </>
                ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* <div className='flex flex-row items-center space-x-4'>
          <NavLink
            to='/'
            className='font-bold'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: isActive ? 'underline' : 'none',
            })}>
            HOME
          </NavLink>
          <NavLink
            to='/report'
            className='font-bold'
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              textDecoration: isActive ? 'underline' : 'none',
            })}>
            REPORT
          </NavLink>
        </div> */}
      </nav>

      <div className=''>{children}</div>
    </div>
  );
}
