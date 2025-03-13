import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type FormEvent,
  type FormEventHandler,
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
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
} from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '~/components/ui/menubar';
import {
  deleteAFollowUp,
  fetchAllFollowUp,
  registerAFollowUp,
} from '~/services/api/followApi';
import type { IFollowUp } from '~/interfaces/authTypes';
import { toast } from 'sonner';
import FollowUpActionModal from '~/components/modal/followUpActionModal';

export default function FollowUp() {
  let pathname = '';
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }
  const [openDialog, setOpenDialog] = useState(false);
  const [actionType, setActionType] = useState<'EDIT' | 'DELETE' | 'VIEW'>('VIEW');
  const [openActionDialog, setOpenActionDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [members, setMembers] = useState<IFollowUp[]>([]);
  const [selectedMember, setSelectedMember] = useState<IFollowUp>();

  const getMembers = async () => {
    setIsLoading(true);
    const data = await fetchAllFollowUp();
    setMembers(data);
    setIsLoading(false);
  };

  const [formData, setFormData] = useState<IFollowUp>({
    title: '',
    first_name: '',
    surname: '',
    others: '',
    gender: 'MALE',
    dob: '',
    address_home: '',
    nearest_busstop: '',
    city: '',
    state: '',
    nationality: '',
    state_of_origin: '',
    lga: '',
    phone: '',
    phone_whatsapp: '',
    email: '',
    social_handle: '',
    marital_status: 'MARRIED',
    occupation: '',
    industry: '',
    office_address: '',
    natural_group: '',
    volunteer_service_area: '',
    born_again_date: '',
    born_again_location: '',
    born_again_testimony: '',
    workers_training: true,
    worker_status: true,
    highest_Qualification: '',
    parish: '',
    area: '',
    zone: '',
    province: '',
    region: '',
  });

  // Handle Input Changes
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
      const response = await registerAFollowUp({ requestData: formData });
      setIsSubmitting(false);
      toast.success(response);
      if (response == 'Data registered successfully') {
        await getMembers();
        setOpenDialog(false);
      }
    } catch (error: any) {
      setIsSubmitting(false);
      toast.success(error);
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div>
      <div className='my-6 text-center font-bold text-black text-xl'>
        {actionRoutes[pathname as keyof typeof actionRoutes]}
      </div>
      <div className='my-6 flex flex-row items-center justify-center mx-auto'>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='CURRENT WEEK' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className='opacity-100 bg-white w-[180px]'>
              <SelectLabel>DURATION</SelectLabel>
              <SelectItem value='CURRENT WEEK'>CURRENT WEEK</SelectItem>
              <SelectItem value='THIS MONTH'>THIS MONTH</SelectItem>
              <SelectItem value='THIS YEAR'>THIS YEAR</SelectItem>
              <SelectItem value='THIS QUARTER'>THIS QUARTER</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='my-10 flex flex-row items-center justify-center mx-auto px-10'>
        <div className='flex flex-row items-center space-x-4 overflow-x-scroll'>
          <div className='sm:w-full sm:space-x-3 md:w-[320px] sm:h-[83px] md:h-[93px] rounded-md bg-white shadow-md flex flex-row items-center justify-between p-4'>
            <div className='font-bold text-[50px] text-[#A49B9B]'>12</div>
            <div className='sm:mr-[10px] flex flex-col items-start justify-center'>
              <div className='text-black'>FIRST TIMERS</div>
            </div>
          </div>
          <div className='sm:w-full sm:space-x-3 md:w-[320px] sm:h-[83px] md:h-[93px] rounded-md bg-white shadow-md flex flex-row items-center justify-between p-4'>
            <div className='font-bold text-[50px] text-[#A49B9B]'>10</div>
            <div className='sm:w-[150px] flex flex-col items-start justify-center'>
              <div className='text-black'>NEW</div>
              <div className='font-bold text-black'>CONVERTS</div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-6 flex flex-row items-center justify-center pr-12'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-[#3E3B3B] text-[20px] font-bold flex-1'></div>
          <button
            className='p-5 w-[166px] h-[24px] rounded-md shadow-md bg-green-400 cursor-pointer flex flex-row items-center justify-center text-center'
            id='openModalButton'>
            <div
              className='text-center font-bold text-xl text-white'
              onClick={() => setOpenDialog(true)}>
              ADD
            </div>
          </button>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog} modal>
        <DialogContent className='rounded-md shadow-lg max-h-[80vh] flex flex-col p-6 bg-white overflow-y-scroll'>
          <DialogHeader>
            <DialogTitle className='font-bold text-xl text-center mb-8'>
              ADD FOLLOW UP DATA
            </DialogTitle>
          </DialogHeader>
          <form className='mb-4 space-y-4' onSubmit={handleSubmit}>
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
                  value={formData.title}
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
                  value={formData.surname}
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
                  value={formData.first_name}
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
                  value={formData.gender}
                  onValueChange={(e) => {
                    setFormData({ ...formData, gender: e as keyof typeof formData.gender });
                  }}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='gender' />
                  </SelectTrigger>
                  <SelectContent onChange={handleChange}>
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
                <Label htmlFor='address_home' className='mb-3'>
                  Home Address
                </Label>
                <Input
                  id='address_home'
                  type='text'
                  className='w-full'
                  name='address_home'
                  placeholder=' Home Address'
                  value={formData.address_home}
                  onChange={handleChange}
                  required
                />
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
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4'>
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
                  value={formData.phone_whatsapp}
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
                  value={formData.phone}
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
                  value={formData.state_of_origin}
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
                  value={formData.lga}
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
                  value={formData.nearest_busstop}
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
                  value={formData.city}
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
                  value={formData.state}
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
                  value={formData.nationality}
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
                  value={formData.marital_status}
                  onValueChange={(e) => {
                    setFormData({
                      ...formData,
                      marital_status: e as keyof typeof formData.marital_status,
                    });
                  }}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Marital status' />
                  </SelectTrigger>
                  <SelectContent onChange={handleChange}>
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
                  value={formData.social_handle}
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
                  value={formData.natural_group}
                  onValueChange={(e) => {
                    setFormData({ ...formData, natural_group: e });
                  }}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Natural Group' />
                  </SelectTrigger>
                  <SelectContent onChange={handleChange}>
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
                  value={formData.occupation}
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
                  value={formData.highest_Qualification}
                  onValueChange={(e) => {
                    setFormData({ ...formData, highest_Qualification: e });
                  }}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Highest Qualification' />
                  </SelectTrigger>
                  <SelectContent onChange={handleChange}>
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
                  value={formData.industry}
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
                  value={formData.office_address}
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
                  value={formData.born_again_date}
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
                  value={formData.born_again_location}
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
                  value={formData.born_again_testimony}
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
                  value={formData.volunteer_service_area}
                  onValueChange={(e) => {
                    setFormData({ ...formData, volunteer_service_area: e });
                  }}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Volunteer Service Area' />
                  </SelectTrigger>
                  <SelectContent onChange={handleChange}>
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
                <Label htmlFor='email' className='mb-3'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  className='w-full'
                  name='email'
                  placeholder='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

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
                  value={formData.parish}
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
                  value={formData.area}
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
                  value={formData.zone}
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
                  value={formData.province}
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
                  value={formData.region}
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
                      checked={formData.wants_believers_class}
                      onCheckedChange={(e) => {
                        setFormData({
                          ...formData,
                          wants_believers_class: !formData.wants_believers_class,
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
                      checked={formData.is_new_convert}
                      onCheckedChange={(e) => {
                        setFormData({ ...formData, is_new_convert: !formData.is_new_convert });
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
                      checked={formData.wants_visitation}
                      onCheckedChange={(e) => {
                        setFormData({
                          ...formData,
                          wants_visitation: !formData.wants_visitation,
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
                      checked={formData.workers_training}
                      onCheckedChange={(e) => {
                        setFormData({
                          ...formData,
                          workers_training: !formData.workers_training,
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
                      checked={formData.worker_status}
                      onCheckedChange={(e) => {
                        setFormData({ ...formData, worker_status: !formData.worker_status });
                      }}
                    />
                    <Label htmlFor='worker_status' className='ml-2'>
                      True
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4 mt-4'>
              <div className='flex-1'>
                <Label htmlFor='gender' className='mb-3'>
                  I agree to let RCCG FOLS, process my data for administration purpose
                </Label>
                <div className='flex space-x-4'>
                  <div className='flex items-center'>
                    <Checkbox id='consent' name='gender' value='agree' required />

                    <Label htmlFor='consent' className='ml-2'>
                      Agree
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
        </DialogContent>
      </Dialog>

      <div className='my-6 flex flex-col items-center justify-center mx-auto '>
        {isLoading ? (
          <div className=''>Loading...</div>
        ) : (
          <>
            <table className='bg-white shadow-md rounded-md p-5 table-auto'>
              <thead>
                <tr className='border-b border-[#D9D9D9]'>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>SN</th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>NAME</th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>GENDER</th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>ADDRESS</th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>
                    PHONE NUMBER
                  </th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>
                    BELIEVERS CLASS
                  </th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>
                    VISITATION
                  </th>
                  <th className='p-3 text-md text-[#3E3B3B] text-[20px] font-bold'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {members.map((e) => (
                  <tr key={e.id} className='border-b border-[#D9D9D9]'>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-semibold'>
                      {e.id}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold'>
                      {e.surname} {e.first_name}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold'>
                      {e.gender}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold'>
                      {e.address_home}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold'>
                      {e.phone_whatsapp}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold'>
                      {e.wants_believers_class ? 'True' : 'False'}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold'>
                      {e.wants_visitation ? 'True' : 'False'}
                    </td>
                    <td className='p-3 text-sm text-[#3E3B3B] text-[20px] font-font-semibold flex items-center justify-center'>
                      <Menubar>
                        <MenubarMenu>
                          <MenubarTrigger>
                            <Ellipsis />
                          </MenubarTrigger>
                          <MenubarContent className='bg-white text-black'>
                            <MenubarItem
                              onClick={() => {
                                setSelectedMember(e);
                                setActionType('VIEW');
                                setOpenActionDialog(true);
                              }}>
                              View
                            </MenubarItem>
                            <MenubarItem
                              onClick={() => {
                                setSelectedMember(e);
                                setActionType('EDIT');
                                setOpenActionDialog(true);
                              }}>
                              Edit
                            </MenubarItem>
                            <MenubarItem
                              onClick={() => {
                                setSelectedMember(e);
                                setActionType('DELETE');
                                setOpenActionDialog(true);
                              }}>
                              Delete
                            </MenubarItem>
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='my-6 flex flex-row items-center justify-between text-black'>
              <div className=''></div>
              <div className='space-x-4 flex flex-row'>
                <ChevronsLeft
                  className='fa fa-angle-double-left cursor-pointer'
                  aria-hidden='true'
                />
                <ChevronLeft
                  className='fa fa-angle-double-left cursor-pointer'
                  aria-hidden='true'
                />

                <span className=''>1 - N of {members.length}</span>
                <ChevronRight
                  className='fa fa-angle-double-left cursor-pointer'
                  aria-hidden='true'
                />
                <ChevronsRight
                  className='fa fa-angle-double-left cursor-pointer'
                  aria-hidden='true'
                />
              </div>
            </div>
          </>
        )}
      </div>
      <FollowUpActionModal
        memberData={selectedMember}
        openActionDialog={openActionDialog}
        setOpenActionDialog={setOpenActionDialog}
        type={actionType}
      />
    </div>
  );
}
