import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

// A simplified user type for the form
interface UserProfile {
  fullname: string;
  email: string;
}

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: UserProfile) => void;
  currentUser: UserProfile;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ isOpen, onClose, onSave, currentUser }) => {
  const [formData, setFormData] = useState<UserProfile>({ fullname: '', email: '' });

  useEffect(() => {
    // When the modal opens, fill it with the current user's data
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Profile" footer={<><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={handleSubmit}>Save Changes</Button></>}>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="mt-1 block w-full rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md" />
        </div>
      </form>
    </Modal>
  );
};

export default ProfileEditModal;