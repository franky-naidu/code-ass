import React from 'react'
import { BasicDashboardLayout } from '../components/layouts'
import {Paper} from "@mui/material"
const ArchivePage = () => {
  return (
    <BasicDashboardLayout>
         <Paper elevation={0} className="h-50 m-5 p-5 ">
            Your archive page content
           </Paper>
    </BasicDashboardLayout>
  )
}

export default ArchivePage