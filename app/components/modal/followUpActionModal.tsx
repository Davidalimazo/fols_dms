import type { IFollowUp } from '~/interfaces/authTypes';
import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type Dispatch,
  type FormEvent,
  type FormEventHandler,
  type SetStateAction,
} from 'react';
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

import { Checkbox } from '~/components/ui/checkbox';
import { toast } from 'sonner';
import { deleteAFollowUp } from '~/services/api/followApi';

export interface IFollowUpActionModal {
  openActionDialog: boolean;
  setOpenActionDialog: Dispatch<SetStateAction<boolean>>;
  type: 'EDIT' | 'VIEW' | 'DELETE';
  memberData?: IFollowUp;
}

const title = {
  EDIT: 'EDIT IFollowUp DATA',
  VIEW: 'FOLLOW UP DATA',
  DELETE: 'DELETE IFollowUp',
};

const ViewData = ({ formData }: { formData?: IFollowUp }) => (
  <form className='mb-4 space-y-4'>
    <div className='font-bold text-xl text-left'>GENERAL PERSONAL INFORMATION</div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='title' className='mb-3'>
          Title
        </Label>
        <Input
          id='title'
          type='text'
          name='title'
          className='w-full'
          placeholder='Mr/Ms/Mrs/Dr'
          value={formData?.title ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='name' className='mb-3'>
          Surname
        </Label>
        <Input
          id='surname'
          name='surname'
          placeholder='Surname'
          value={formData?.surname ?? ''}
          required
          className='w-full'
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='name' className='mb-3'>
          First Name
        </Label>
        <Input
          id='firstName'
          name='first_name'
          placeholder='First Name'
          value={formData?.first_name ?? ''}
          required
          type='text'
          className='w-full'
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='gender' className='mb-3'>
          Gender
        </Label>

        <Select name='gender' value={formData?.gender ?? ''}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='gender' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className='opacity-100 bg-white w-[180px]'>
              <SelectLabel>Gender</SelectLabel>
              <SelectItem value='MALE'>MALE</SelectItem>
              <SelectItem value='FEMALE'>FEMALE</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='natural_group' className='mb-3'>
          Natural Group
        </Label>
        <Select name='natural_group' value={formData?.natural_group ?? ''}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Natural Group' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className='opacity-100 bg-white w-[180px]'>
              <SelectLabel>Natural Group</SelectLabel>
              <SelectItem value='ELDER'>ELDER</SelectItem>
              <SelectItem value='MEN'>MEN</SelectItem>
              <SelectItem value='WOMEN'>WOMEN</SelectItem>
              <SelectItem value='YAYA'>YAYA</SelectItem>
              <SelectItem value='TEENS'>TEENS</SelectItem>
              <SelectItem value='CHILDREN'>CHILDREN</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='flex-1'>
        <Label htmlFor='dob' className='mb-3'>
          DOB
        </Label>
        <Input
          id='dob'
          type='date'
          className='w-full'
          name='dob'
          placeholder='Surname'
          value={formData?.dob ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='address_home' className='mb-3'>
          Home Address
        </Label>
        <Input
          id='address_home'
          type='text'
          className='w-full'
          name='address_home'
          placeholder=' Home Address'
          value={formData?.address_home ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='phone' className='mb-3'>
          Phone Number
        </Label>
        <Input
          id='phone'
          type='text'
          className='w-full'
          name='phone'
          placeholder='Phone Number'
          value={formData?.phone ?? ''}
          required
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
          name='state_of_origin'
          placeholder='Surname'
          value={formData?.state_of_origin ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='lga' className='mb-3'>
          LGA
        </Label>
        <Input
          id='lga'
          type='text'
          className='w-full'
          name='lga'
          placeholder='Surname'
          value={formData?.lga ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='nearestBusStop' className='mb-3'>
          Nearest Bus Stop
        </Label>
        <Input
          id='nearest_busstop'
          type='text'
          className='w-full'
          name='nearest_busstop'
          placeholder='Nearest Bus Stop'
          value={formData?.nearest_busstop ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='city' className='mb-3'>
          City
        </Label>
        <Input
          id='city'
          type='text'
          className='w-full'
          name='city'
          placeholder='Surname'
          value={formData?.city ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='state' className='mb-3'>
          State
        </Label>
        <Input
          id='state'
          type='text'
          className='w-full'
          name='state'
          placeholder='state'
          value={formData?.state ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='nationality' className='mb-3'>
          Nationality
        </Label>
        <Input
          id='nationality'
          type='text'
          className='w-full'
          name='nationality'
          placeholder='nationality'
          value={formData?.nationality ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='email' className='mb-3'>
          Email
        </Label>
        <Input
          id='email'
          type='email'
          className='w-full'
          name='email'
          placeholder='email'
          value={formData?.email ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='phone_whatsapp' className='mb-3'>
          Whatsapp Phone Number
        </Label>
        <Input
          id='phone_whatsapp'
          type='text'
          className='w-full'
          name='phone_whatsapp'
          placeholder='Whatsapp Phone Number'
          value={formData?.phone_whatsapp ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='marital_status' className='mb-3'>
          Marital status
        </Label>
        <Select name='marital_status' value={formData?.marital_status ?? ''}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Marital status' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className='opacity-100 bg-white w-[180px]'>
              <SelectLabel>Marital Status</SelectLabel>
              <SelectItem value='MARRIED'>MARRIED</SelectItem>
              <SelectItem value='SINGLE'>SINGLE</SelectItem>
              <SelectItem value='ENGAGED'>ENGAGED</SelectItem>
              <SelectItem value='SEPARATED'>SEPARATED</SelectItem>
              <SelectItem value='DIVORCED'>DIVORCED</SelectItem>
              <SelectItem value='WIDOWED'>WIDOWED</SelectItem>
              <SelectItem value='REMARRIED'>REMARRIED</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex-1'>
        <Label htmlFor='social_handle' className='mb-3'>
          Social Handle
        </Label>
        <Input
          id='social_handle'
          type='text'
          className='w-full'
          name='social_handle'
          placeholder='Socials Handle'
          value={formData?.social_handle ?? ''}
        />
      </div>
    </div>

    <div className='font-bold text-xl text-left'>PROFESSIONAL/BUSINESS</div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='occupation' className='mb-3'>
          Occupation
        </Label>
        <Input
          id='occupation'
          type='text'
          className='w-full'
          name='occupation'
          placeholder='Occupation'
          value={formData?.occupation ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='natural_group' className='mb-3'>
          Highest Qualification
        </Label>

        <Select name='highest_Qualification' value={formData?.highest_Qualification ?? ''}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Highest Qualification' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className='opacity-100 bg-white w-[180px]'>
              <SelectLabel>Highest Qualification</SelectLabel>
              <SelectItem value='SSCE'>SSCE</SelectItem>
              <SelectItem value='OND'>OND</SelectItem>
              <SelectItem value='HND'>HND</SelectItem>
              <SelectItem value='BSC'>BSC</SelectItem>
              <SelectItem value='MSC'>MSC</SelectItem>
              <SelectItem value='PhD'>PhD</SelectItem>
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
          name='industry'
          value={formData?.industry ?? ''}
          required
          placeholder='industry'
        />
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
          name='office_address'
          value={formData?.office_address ?? ''}
          required
        />
      </div>
    </div>
    <div className='font-bold text-xl text-left'>SPIRITUAL STATUS</div>
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
          name='born_again_date'
          value={formData?.born_again_date ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='born_again_location' className='mb-3'>
          Born Again Location
        </Label>
        <Input
          id='born_again_location'
          type='text'
          className='w-full'
          placeholder='Born Again Location'
          name='born_again_location'
          value={formData?.born_again_location ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='born_again_testimony' className='mb-3'>
          Born Again Testimony
        </Label>
        <Input
          id='born_again_testimony'
          type='text'
          className='w-full'
          placeholder='Born Again Testimony'
          name='born_again_testimony'
          value={formData?.born_again_testimony ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='volunteer_service_area' className='mb-3'>
          Volunteer Service Area
        </Label>
        <Select name='volunteer_service_area' value={formData?.volunteer_service_area ?? ''}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Volunteer Service Area' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className='opacity-100 bg-white w-[180px]'>
              <SelectLabel>Volunteer Service Area</SelectLabel>
              <SelectItem value='WELFARE'>WELFARE</SelectItem>
              <SelectItem value='SANCTUARY KEEPERS'>SANCTUARY KEEPERS</SelectItem>
              <SelectItem value='EVANGELISM_OUTREACH'>EVANGELISM_OUTREACH</SelectItem>
              <SelectItem value='MARSHALL SQUAD'>MARSHALL SQUAD</SelectItem>
              <SelectItem value='PROFESSIONAL GROUP'>PROFESSIONAL GROUP</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='area' className='mb-3'>
          Area
        </Label>
        <Input
          id='area'
          type='text'
          className='w-full'
          placeholder='Area'
          name='area'
          value={formData?.area ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='zone' className='mb-3'>
          Zone
        </Label>
        <Input
          id='zone'
          type='text'
          className='w-full'
          placeholder='Zone'
          name='zone'
          value={formData?.zone ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='province' className='mb-3'>
          Province
        </Label>
        <Input
          id='province'
          type='text'
          className='w-full'
          placeholder='Province'
          name='province'
          value={formData?.province ?? ''}
          required
        />
      </div>
      <div className='flex-1'>
        <Label htmlFor='region' className='mb-3'>
          Region
        </Label>
        <Input
          id='region'
          type='text'
          className='w-full'
          placeholder='Region'
          name='region'
          value={formData?.region ?? ''}
          required
        />
      </div>
    </div>
    <div className='mb-6 flex flex-row items-center space-x-4'>
      <div className='flex-1'>
        <Label htmlFor='parish' className='mb-3'>
          Parish
        </Label>
        <Input
          id='parish'
          type='text'
          className='w-full'
          placeholder='Parish'
          name='parish'
          value={formData?.parish ?? ''}
          required
        />
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4 mt-4'>
      <div className='flex-1'>
        <Label htmlFor='believers_class' className='mb-3'>
          Started Believers Class
        </Label>
        <div className='flex space-x-4'>
          <div className='flex items-center'>
            <Checkbox
              id='believers_class'
              name='wants_believers_class'
              checked={formData?.wants_believers_class}
            />
            <Label htmlFor='believers_class' className='ml-2'>
              True
            </Label>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <Label htmlFor='water_baptism' className='mb-3'>
          New Convert
        </Label>
        <div className='flex space-x-4'>
          <div className='flex items-center'>
            <Checkbox
              id='water_baptism'
              name='is_new_convert'
              checked={formData?.is_new_convert}
            />
            <Label htmlFor='water_baptism' className='ml-2'>
              True
            </Label>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <Label htmlFor='water_baptism' className='mb-3'>
          Wants Visitation
        </Label>
        <div className='flex space-x-4'>
          <div className='flex items-center'>
            <Checkbox
              id='wants_baptism_program'
              name='wants_visitation'
              checked={formData?.wants_visitation}
            />
            <Label htmlFor='wants_baptism_program' className='ml-2'>
              True
            </Label>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-row items-center space-x-4 mt-4'>
      <div className='flex-1'>
        <Label htmlFor='workers_training' className='mb-3'>
          Started Workers Training
        </Label>
        <div className='flex space-x-4'>
          <div className='flex items-center'>
            <Checkbox
              id='workers_training'
              name='workers_training'
              checked={formData?.workers_training}
            />
            <Label htmlFor='workers_training' className='ml-2'>
              True
            </Label>
          </div>
        </div>
      </div>{' '}
      <div className='flex-1'>
        <Label htmlFor='worker_status' className='mb-3'>
          Worker Status
        </Label>
        <div className='flex space-x-4'>
          <div className='flex items-center'>
            <Checkbox
              id='worker_status'
              name='worker_status'
              checked={formData?.worker_status}
            />
            <Label htmlFor='worker_status' className='ml-2'>
              True
            </Label>
          </div>
        </div>
      </div>
      <div className='flex-1'></div>
    </div>
  </form>
);

const EditData = ({ IFollowUp }: { IFollowUp?: IFollowUp }) => {
  const [formData, setFormData] = useState<IFollowUp | undefined>(IFollowUp);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();

    try {
      //   const response = await registerAMember({ requestData: formData });
      setIsSubmitting(false);
      toast.success('');
      //   if (response == 'User registered successfully') {
      //     await getMembers();
      //     setOpenDialog(false);
      //   }
    } catch (error: any) {
      setIsSubmitting(false);
      //   toast.success(error);
    }
  };
  return (
    <form className='mb-4 space-y-4'>
      <div className='font-bold text-xl text-left'>GENERAL PERSONAL INFORMATION</div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='title' className='mb-3'>
            Title
          </Label>
          <Input
            id='title'
            type='text'
            name='title'
            className='w-full'
            placeholder='Mr/Ms/Mrs/Dr'
            value={formData?.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='name' className='mb-3'>
            Surname
          </Label>
          <Input
            id='surname'
            name='surname'
            placeholder='Surname'
            value={formData?.surname}
            onChange={handleChange}
            required
            className='w-full'
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='name' className='mb-3'>
            First Name
          </Label>
          <Input
            id='firstName'
            name='first_name'
            placeholder='First Name'
            value={formData?.first_name}
            onChange={handleChange}
            required
            type='text'
            className='w-full'
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='gender' className='mb-3'>
            Gender
          </Label>

          <Select
            name='gender'
            value={formData?.gender}
            onValueChange={(e) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                gender: e as IFollowUp['gender'],
              }));
            }}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='gender' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='opacity-100 bg-white w-[180px]'>
                <SelectLabel>Gender</SelectLabel>
                <SelectItem value='MALE'>MALE</SelectItem>
                <SelectItem value='FEMALE'>FEMALE</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        {/* <div className='flex-1'>
          <Label htmlFor='nin' className='mb-3'>
            NIN
          </Label>
          <Input
            id='nin'
            type='text'
            className='w-full'
            name='nin'
            placeholder='NIN'
            value={formData?.nin}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className='flex-1'>
          <Label htmlFor='dob' className='mb-3'>
            DOB
          </Label>
          <Input
            id='dob'
            type='date'
            className='w-full'
            name='dob'
            placeholder='Surname'
            value={formData?.dob}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='address_home' className='mb-3'>
            Home Address
          </Label>
          <Input
            id='address_home'
            type='text'
            className='w-full'
            name='address_home'
            placeholder=' Home Address'
            value={formData?.address_home}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='phone' className='mb-3'>
            Phone Number
          </Label>
          <Input
            id='phone'
            type='text'
            className='w-full'
            name='phone'
            placeholder='Phone Number'
            value={formData?.phone}
            onChange={handleChange}
            required
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
            name='state_of_origin'
            placeholder='Surname'
            value={formData?.state_of_origin}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='lga' className='mb-3'>
            LGA
          </Label>
          <Input
            id='lga'
            type='text'
            className='w-full'
            name='lga'
            placeholder='Surname'
            value={formData?.lga}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='nearestBusStop' className='mb-3'>
            Nearest Bus Stop
          </Label>
          <Input
            id='nearest_busstop'
            type='text'
            className='w-full'
            name='nearest_busstop'
            placeholder='Nearest Bus Stop'
            value={formData?.nearest_busstop}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='city' className='mb-3'>
            City
          </Label>
          <Input
            id='city'
            type='text'
            className='w-full'
            name='city'
            placeholder='Surname'
            value={formData?.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='state' className='mb-3'>
            State
          </Label>
          <Input
            id='state'
            type='text'
            className='w-full'
            name='state'
            placeholder='state'
            value={formData?.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='nationality' className='mb-3'>
            Nationality
          </Label>
          <Input
            id='nationality'
            type='text'
            className='w-full'
            name='nationality'
            placeholder='nationality'
            value={formData?.nationality}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='email' className='mb-3'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            className='w-full'
            name='email'
            placeholder='email'
            value={formData?.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='phone_whatsapp' className='mb-3'>
            Whatsapp Phone Number
          </Label>
          <Input
            id='phone_whatsapp'
            type='text'
            className='w-full'
            name='phone_whatsapp'
            placeholder='Whatsapp Phone Number'
            value={formData?.phone_whatsapp}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='marital_status' className='mb-3'>
            Marital status
          </Label>
          <Select
            name='marital_status'
            value={formData?.marital_status}
            onValueChange={(e) => {
              setFormData({
                ...formData,
                marital_status: e as IFollowUp['marital_status'],
              });
            }}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Marital status' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='opacity-100 bg-white w-[180px]'>
                <SelectLabel>Marital Status</SelectLabel>
                <SelectItem value='MARRIED'>MARRIED</SelectItem>
                <SelectItem value='SINGLE'>SINGLE</SelectItem>
                <SelectItem value='ENGAGED'>ENGAGED</SelectItem>
                <SelectItem value='SEPARATED'>SEPARATED</SelectItem>
                <SelectItem value='DIVORCED'>DIVORCED</SelectItem>
                <SelectItem value='WIDOWED'>WIDOWED</SelectItem>
                <SelectItem value='REMARRIED'>REMARRIED</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='flex-1'>
          <Label htmlFor='social_handle' className='mb-3'>
            Social Handle
          </Label>
          <Input
            id='social_handle'
            type='text'
            className='w-full'
            name='social_handle'
            placeholder='Socials Handle'
            value={formData?.social_handle ?? ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='natural_group' className='mb-3'>
            Natural Group
          </Label>
          <Select
            name='natural_group'
            value={formData?.natural_group}
            onValueChange={(e) => {
              setFormData({
                ...formData,
                natural_group: e as IFollowUp['natural_group'],
              });
            }}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Natural Group' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='opacity-100 bg-white w-[180px]'>
                <SelectLabel>Natural Group</SelectLabel>
                <SelectItem value='ELDER'>ELDER</SelectItem>
                <SelectItem value='MEN'>MEN</SelectItem>
                <SelectItem value='WOMEN'>WOMEN</SelectItem>
                <SelectItem value='YAYA'>YAYA</SelectItem>
                <SelectItem value='TEENS'>TEENS</SelectItem>
                <SelectItem value='CHILDREN'>CHILDREN</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='flex-1'></div>
      </div>

      <div className='font-bold text-xl text-left'>PROFESSIONAL/BUSINESS</div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='occupation' className='mb-3'>
            Occupation
          </Label>
          <Input
            id='occupation'
            type='text'
            className='w-full'
            name='occupation'
            placeholder='Occupation'
            value={formData?.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='natural_group' className='mb-3'>
            Highest Qualification
          </Label>

          <Select
            name='highest_Qualification'
            value={formData?.highest_Qualification}
            onValueChange={(e) => {
              setFormData({
                ...formData,
                highest_Qualification: e as IFollowUp['highest_Qualification'],
              });
            }}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Highest Qualification' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='opacity-100 bg-white w-[180px]'>
                <SelectLabel>Highest Qualification</SelectLabel>
                <SelectItem value='SSCE'>SSCE</SelectItem>
                <SelectItem value='OND'>OND</SelectItem>
                <SelectItem value='HND'>HND</SelectItem>
                <SelectItem value='BSC'>BSC</SelectItem>
                <SelectItem value='MSC'>MSC</SelectItem>
                <SelectItem value='PhD'>PhD</SelectItem>
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
            name='industry'
            value={formData?.industry}
            onChange={handleChange}
            required
            placeholder='industry'
          />
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
            name='office_address'
            value={formData?.office_address}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='font-bold text-xl text-left'>SPIRITUAL STATUS</div>
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
            name='born_again_date'
            value={formData?.born_again_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='born_again_location' className='mb-3'>
            Born Again Location
          </Label>
          <Input
            id='born_again_location'
            type='text'
            className='w-full'
            placeholder='Born Again Location'
            name='born_again_location'
            value={formData?.born_again_location}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='born_again_testimony' className='mb-3'>
            Born Again Testimony
          </Label>
          <Input
            id='born_again_testimony'
            type='text'
            className='w-full'
            placeholder='Born Again Testimony'
            name='born_again_testimony'
            value={formData?.born_again_testimony}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='volunteer_service_area' className='mb-3'>
            Volunteer Service Area
          </Label>
          <Select
            name='volunteer_service_area'
            value={formData?.volunteer_service_area}
            onValueChange={(e) => {
              setFormData({
                ...formData,
                volunteer_service_area: e as IFollowUp['volunteer_service_area'],
              });
            }}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Volunteer Service Area' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='opacity-100 bg-white w-[180px]'>
                <SelectLabel>Volunteer Service Area</SelectLabel>
                <SelectItem value='WELFARE'>WELFARE</SelectItem>
                <SelectItem value='SANCTUARY KEEPERS'>SANCTUARY KEEPERS</SelectItem>
                <SelectItem value='EVANGELISM_OUTREACH'>EVANGELISM_OUTREACH</SelectItem>
                <SelectItem value='MARSHALL SQUAD'>MARSHALL SQUAD</SelectItem>
                <SelectItem value='PROFESSIONAL GROUP'>PROFESSIONAL GROUP</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex flex-row items-center space-x-4'>
        {/* <div className='flex-1'>
          <Label htmlFor='ordination_category' className='mb-3'>
            Ordination Category
          </Label>

          <Select
            name='ordination_category'
            value={formData?.ordination_category}
            onValueChange={(e) => {
              setFormData({
                ...formData,
                ordination_category: e as IFollowUp['ordination_category'],
              });
            }}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Ordination Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='opacity-100 bg-white w-[180px]'>
                <SelectLabel>Ordination Category</SelectLabel>
                <SelectItem value='BROTHER'>BROTHER</SelectItem>
                <SelectItem value='SISTER'>SISTER</SelectItem>
                <SelectItem value='DEACON'>DEACON</SelectItem>
                <SelectItem value='DEACONESS'>DEACONESS</SelectItem>
                <SelectItem value='ASST PASTOR'>ASST PASTOR</SelectItem>
                <SelectItem value='FULL PASTOR'>FULL PASTOR</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        <div className='flex-1'>
          <Label htmlFor='parish' className='mb-3'>
            Parish
          </Label>
          <Input
            id='parish'
            type='text'
            className='w-full'
            placeholder='Parish'
            name='parish'
            value={formData?.parish}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='area' className='mb-3'>
            Area
          </Label>
          <Input
            id='area'
            type='text'
            className='w-full'
            placeholder='Area'
            name='area'
            value={formData?.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='zone' className='mb-3'>
            Zone
          </Label>
          <Input
            id='zone'
            type='text'
            className='w-full'
            placeholder='Zone'
            name='zone'
            value={formData?.zone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex-1'>
          <Label htmlFor='province' className='mb-3'>
            Province
          </Label>
          <Input
            id='province'
            type='text'
            className='w-full'
            placeholder='Province'
            name='province'
            value={formData?.province}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex-1'>
          <Label htmlFor='region' className='mb-3'>
            Region
          </Label>
          <Input
            id='region'
            type='text'
            className='w-full'
            placeholder='Region'
            name='region'
            value={formData?.region}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4 mt-4'>
        <div className='flex-1'>
          <Label htmlFor='believers_class' className='mb-3'>
            Started Believers Class
          </Label>
          <div className='flex space-x-4'>
            <div className='flex items-center'>
              <Checkbox
                id='believers_class'
                name='wants_believers_class'
                checked={formData?.wants_believers_class}
                onCheckedChange={(e) => {
                  setFormData({
                    ...formData,
                    wants_believers_class: !formData?.wants_believers_class,
                  });
                }}
              />
              <Label htmlFor='believers_class' className='ml-2'>
                True
              </Label>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <Label htmlFor='water_baptism' className='mb-3'>
            New Convert
          </Label>
          <div className='flex space-x-4'>
            <div className='flex items-center'>
              <Checkbox
                id='water_baptism'
                name='is_new_convert'
                checked={formData?.is_new_convert}
                onCheckedChange={(e) => {
                  setFormData({ ...formData, is_new_convert: !formData?.is_new_convert });
                }}
              />
              <Label htmlFor='water_baptism' className='ml-2'>
                True
              </Label>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <Label htmlFor='water_baptism' className='mb-3'>
            Wants Visitation
          </Label>
          <div className='flex space-x-4'>
            <div className='flex items-center'>
              <Checkbox
                id='wants_baptism_program'
                name='wants_visitation'
                checked={formData?.wants_visitation}
                onCheckedChange={(e) => {
                  setFormData({
                    ...formData,
                    wants_visitation: !formData?.wants_visitation,
                  });
                }}
              />
              <Label htmlFor='wants_baptism_program' className='ml-2'>
                True
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center space-x-4 mt-4'>
        <div className='flex-1'>
          <Label htmlFor='workers_training' className='mb-3'>
            Started Workers Training
          </Label>
          <div className='flex space-x-4'>
            <div className='flex items-center'>
              <Checkbox
                id='workers_training'
                name='workers_training'
                checked={formData?.workers_training}
                onCheckedChange={(e) => {
                  setFormData({
                    ...formData,
                    workers_training: !formData?.workers_training,
                  });
                }}
              />
              <Label htmlFor='workers_training' className='ml-2'>
                True
              </Label>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <Label htmlFor='worker_status' className='mb-3'>
            Worker Status
          </Label>
          <div className='flex space-x-4'>
            <div className='flex items-center'>
              <Checkbox
                id='worker_status'
                name='worker_status'
                checked={formData?.worker_status}
                onCheckedChange={(e) => {
                  setFormData({ ...formData, worker_status: !formData?.worker_status });
                }}
              />
              <Label htmlFor='worker_status' className='ml-2'>
                True
              </Label>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button
          type='submit'
          disabled={isSubmitting}
          className='w-full p-2 bg-green-500 text-white rounded-md'>
          Submit
        </Button>
      </DialogFooter>
    </form>
  );
};
const DeleteData = ({ IFollowUp }: { IFollowUp?: IFollowUp }) => {
  const [formData, setFormData] = useState<IFollowUp | undefined>(IFollowUp);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();

    try {
      const response = await deleteAFollowUp({ id: IFollowUp?.id ?? 0 });
      setIsSubmitting(false);
      toast.success(response);
      if (response == 'User deleted successfully') {
        window.location.reload();
      }
    } catch (error: any) {
      setIsSubmitting(false);
      toast.success(error);
    }
  };
  return (
    <form className='mb-4 space-y-4' onSubmit={handleSubmit}>
      <Button
        type='submit'
        disabled={isSubmitting}
        className='w-full p-2 bg-red-500 text-white rounded-md'>
        Submit
      </Button>
    </form>
  );
};

const DisplayView = ({
  type,
  memberData,
}: {
  type: 'EDIT' | 'VIEW' | 'DELETE';
  memberData?: IFollowUp;
}) => {
  if (type == 'VIEW') return ViewData({ formData: memberData });
  else if (type == 'EDIT') return EditData({ IFollowUp: memberData });
  else return DeleteData({ IFollowUp: memberData });
};

export default function FollowUpActionModal({
  openActionDialog,
  setOpenActionDialog,
  type,
  memberData,
}: IFollowUpActionModal) {
  return (
    <Dialog open={openActionDialog} onOpenChange={setOpenActionDialog} modal>
      <DialogContent className='rounded-md shadow-lg max-h-[80vh] flex flex-col p-6 bg-white overflow-y-scroll'>
        <DialogHeader>
          <DialogTitle className='font-bold text-xl text-center mb-8'>
            {title[type]}
          </DialogTitle>
        </DialogHeader>
        {DisplayView({ memberData, type })}
      </DialogContent>
    </Dialog>
  );
}
