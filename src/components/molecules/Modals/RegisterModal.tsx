'use client';

import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FaGoogle } from 'react-icons/fa';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';
import Modal from './Modal';


const RegisterModal = () => {
  const { isOpen, onOpen, onClose } = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/auth/register', data);
      console.log(response);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [onClose]);

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      isOpen={isOpen}
      onClose={onClose}
      actionLabel='Continue'
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default RegisterModal