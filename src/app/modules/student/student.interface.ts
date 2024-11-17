export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type Username = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGuardian = {
  name: string;
  contactNo: string;
  occupation: string;
  address: string;
};

export interface Student {
  id: string;
  name: Username;
  gender: 'Male' | 'Female';
  email: string;
  dateOfBirth: string;
  contactNumber: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  avatar?: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
}
