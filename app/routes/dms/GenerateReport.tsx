import React, { useState } from 'react';
import { actionRoutes } from '~/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Textarea } from '~/components/ui/textarea';
import { Checkbox } from '~/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function GenerateReport() {
  let pathname = '';
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <div className='my-6 text-center font-bold text-black text-xl'>
        {actionRoutes[pathname as keyof typeof actionRoutes]}
      </div>

      <div className='rounded-md shadow-lg w-[600px] p-6 bg-white overflow-y-scroll mx-auto'>
        <form className='mb-4 space-y-4'>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='title' className='mb-3'>
                Title
              </Label>
              <Input id='title' type='text' className='w-full' placeholder='Mr/Ms/Mrs/Dr' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='name' className='mb-3'>
                Name
              </Label>
              <Input
                id='name'
                type='text'
                className='w-full'
                placeholder='Surname/First Name/Other Name'
              />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='dob' className='mb-3'>
                DOB
              </Label>
              <Input id='dob' type='text' className='w-full' placeholder='DD/MM' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='name' className='mb-3'>
                Phone Number
              </Label>
              <Input
                id='phoneNumber'
                type='text'
                className='w-full'
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='state_of_origin' className='mb-3'>
                State of Origin
              </Label>
              <Input
                id='state_of_origin'
                type='text'
                className='w-full'
                placeholder='State of origin'
              />
            </div>
            <div className='flex-1'>
              <Label htmlFor='lga' className='mb-3'>
                LGA
              </Label>
              <Input id='lga' type='text' className='w-full' placeholder='LGA' />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='city' className='mb-3'>
                City
              </Label>
              <Input id='city' type='text' className='w-full' placeholder='City' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='nearestBusStop' className='mb-3'>
                Nearest Bus Stop
              </Label>
              <Input
                id='nearestBusStop'
                type='text'
                className='w-full'
                placeholder='Nearest Bus Stop'
              />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='state' className='mb-3'>
                State
              </Label>
              <Input id='state' type='text' className='w-full' placeholder='State' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='nationality' className='mb-3'>
                Nationality
              </Label>
              <Input
                id='nationality'
                type='text'
                className='w-full'
                placeholder='Nationality'
              />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='occupation' className='mb-3'>
                Occupation
              </Label>
              <Input id='occupation' type='text' className='w-full' placeholder='Occupation' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='natural_group' className='mb-3'>
                Highest Qualification
              </Label>

              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Highest Qualification' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='opacity-100 bg-white w-[180px]'>
                    <SelectLabel>Highest Qualification</SelectLabel>
                    <SelectItem value='ssce'>SSCE</SelectItem>
                    <SelectItem value='ond'>OND</SelectItem>
                    <SelectItem value='hnd'>HND</SelectItem>
                    <SelectItem value='bsc'>BSC</SelectItem>
                    <SelectItem value='msc'>MSC</SelectItem>
                    <SelectItem value='phd'>PhD</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='industry' className='mb-3'>
                Industry
              </Label>
              <Input
                id='industry'
                type='text'
                className='w-full'
                placeholder='industry'></Input>
            </div>
            <div className='flex-1'>
              <Label htmlFor='office_address' className='mb-3'>
                Office Address
              </Label>
              <Input
                id='office_address'
                type='text'
                className='w-full'
                placeholder='Office Address'
              />
            </div>
          </div>

          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='occupation' className='mb-3'>
                Occupation
              </Label>
              <Input id='occupation' type='text' className='w-full' placeholder='occupation' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='marital_status' className='mb-3'>
                Marital status
              </Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Marital status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='opacity-100 bg-white w-[180px]'>
                    <SelectLabel>Marital Status</SelectLabel>
                    <SelectItem value='Married'>Married</SelectItem>

                    <SelectItem value='Single'>Single</SelectItem>
                    <SelectItem value='Engaged'>Engaged</SelectItem>
                    <SelectItem value='Separated'>Separated</SelectItem>
                    <SelectItem value='Divorced'>Divorced</SelectItem>
                    <SelectItem value='Widow'>Widow</SelectItem>
                    <SelectItem value='Widower'>Widower</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='cell' className='mb-3'>
                Cell
              </Label>
              <Input id='cell' type='text' className='w-full' placeholder='Cell' />
            </div>
            <div className='flex-1'>
              <Label htmlFor='natural_group' className='mb-3'>
                Natural Group
              </Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Natural Group' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='opacity-100 bg-white w-[180px]'>
                    <SelectLabel>Natural Group</SelectLabel>
                    <SelectItem value='elder'>Elder</SelectItem>
                    <SelectItem value='man'>Man</SelectItem>
                    <SelectItem value='woman'>Woman</SelectItem>
                    <SelectItem value='youth'>Youth</SelectItem>
                    <SelectItem value='teenager'>Teenager</SelectItem>
                    <SelectItem value='child'>Child</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='bornAgainDate' className='mb-3'>
                Born Again Date
              </Label>
              <Input
                id='bornAgainDate'
                type='date'
                className='w-full'
                placeholder='Born Again Date'
              />
            </div>
            <div className='flex-1'>
              <Label htmlFor='believersClassDate' className='mb-3'>
                Believers className Date
              </Label>
              <Input
                id='believersClassDate'
                type='date'
                className='w-full'
                placeholder='Believers className Date'
              />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='department' className='mb-3'>
                Department
              </Label>

              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Department' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='opacity-100 bg-white w-[180px]'>
                    <SelectLabel>Department</SelectLabel>
                    <SelectItem value='ushering'>Usher</SelectItem>
                    <SelectItem value='Admin'>Admin</SelectItem>
                    <SelectItem value='protocol'>Protocol</SelectItem>
                    <SelectItem value='choir'>Choir</SelectItem>
                    <SelectItem value='children_church'>Children Church</SelectItem>
                    <SelectItem value='teenagers_church'>Teenagers Church</SelectItem>
                    <SelectItem value='welfare'>Welfare</SelectItem>
                    <SelectItem value='prayer'>Prayer</SelectItem>
                    <SelectItem value='sound_engineering'>Sound Engineering</SelectItem>
                    <SelectItem value='media_publicity'>Media & Publicity</SelectItem>
                    <SelectItem value='believers className'>Believers className</SelectItem>
                    <SelectItem value='sunday school'>Sunday School</SelectItem>
                    <SelectItem value='reception'>Reception</SelectItem>
                    <SelectItem value='counselling'>Counselling</SelectItem>
                    <SelectItem value='evangelism_Follow_up'>
                      Evangelism & Follow up
                    </SelectItem>
                    <SelectItem value='prison_hospital'>Prison & Hospital</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex-1'>
              <Label htmlFor='position' className='mb-3'>
                Position
              </Label>

              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Member' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='opacity-100 bg-white w-[180px]'>
                    <SelectLabel>Member</SelectLabel>
                    <SelectItem value='member'>Member</SelectItem>
                    <SelectItem value='hod'>HOD</SelectItem>
                    <SelectItem value='minister'>Minister</SelectItem>
                    <SelectItem value='parish_pastor'>Parish Pastor</SelectItem>
                    <SelectItem value='area_pastor'>Area Pastor</SelectItem>
                    <SelectItem value='zonal_pastor'>Zonal Pastor</SelectItem>
                    <SelectItem value='asst_provincial_pastor'>
                      Asst Provincial Pastor
                    </SelectItem>
                    <SelectItem value='provincial_pastor'>Provincial Pastor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <div className='flex-1'>
              <Label htmlFor='ordinationStatus' className='mb-3'>
                Ordination Status
              </Label>

              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Ordination Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='opacity-100 bg-white w-[180px]'>
                    <SelectLabel>Ordination Status</SelectLabel>
                    <SelectItem value='elder'>Elder</SelectItem>
                    <SelectItem value='brother'>Brother</SelectItem>
                    <SelectItem value='sister'>Sister</SelectItem>
                    <SelectItem value='deacon'>Deacon</SelectItem>
                    <SelectItem value='deaconess'>Deaconess</SelectItem>
                    <SelectItem value='assistant_pastor'>Assistant Pastor</SelectItem>
                    <SelectItem value='pastor'>Pastor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex-1'>
              <Label htmlFor='former_parish' className='mb-3'>
                Former Parish
              </Label>
              <Input
                id='former_parish'
                type='text'
                className='w-full'
                placeholder='Former Parish'
              />
            </div>
          </div>
          <div className='flex flex-row items-center space-x-4 mt-4'>
            <div className='flex-1'>
              <Label htmlFor='gender' className='mb-3'>
                Gender
              </Label>
              <RadioGroup defaultValue='' className='flex flex-row'>
                <div className='flex space-x-4'>
                  <RadioGroupItem value='Male' id='male' />
                  <Label htmlFor='male'>Male</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem id='female' value='Female' />
                  <Label htmlFor='female'>Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div className='flex-1'>
              <Label htmlFor='new_convert' className='mb-3'>
                New Convert
              </Label>
              <div className='flex space-x-4'>
                <div className='flex items-center'>
                  <Checkbox id='new_convert_true' name='new_convert' value='True' />
                  <Label htmlFor='new_convert_true' className='ml-2'>
                    True
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type='submit' className='w-full p-2 bg-green-500 text-white rounded-md'>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </div>
    </div>
  );
}
