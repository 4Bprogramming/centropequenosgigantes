import React from 'react';
import { blog } from '../../../../Services/SevicesCard';
export const especialidades= blog.map(e=>{return{value: e.title, label:e.title}})
   