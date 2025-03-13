export enum ChangePasswordStatus {
    notForceChangePassword = 0, //User does not need to change his/her password
    forceChangePassword = 1, //User must change password
  }
  
  export enum affiliatedStatus {
    isNotAffliated = 0,
    isAffiliated = 1,
  }
  
  export enum hasServicesStatus {
    isNotHasServices = 0,
    isHasServices = 1,
  }
  
  export enum uploadStateOptions {
    default = 'default',
    fileDropped = 'fileDropped',
    uploading = 'uploading',
    error = 'error',
    uploaded = 'uploaded',
  }
  
  export enum validationStates {
    default = 'default',
    success = 'success',
    validating = 'validating',
    error = 'error',
  }
  
  export enum businessStatuses {
    enabled = 1,
    disabled = 0,
  }
  
  export enum userStatuses {
    disabled = 0,
    enabled = 1,
    pending = 2,
  }
  
  export enum sortOrder {
    asc = 'asc',
    desc = 'desc',
  }
  
  export enum acceptedFileFormats {
    doc = 'doc',
    image = 'image',
  }
  
  export enum kycStatuses {
    rejected = 0, //Admin Declined
    approved = 1, //Admin Approved
    uploaded = 2, // User has Uploaded, Admin yet to decide
    pending = 3, // User has not uploaded
  }
  