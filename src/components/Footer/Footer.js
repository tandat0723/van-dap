'use client'
import React from 'react'
import { motion } from 'framer-motion';

function Footer() {
    return (
        <div className="card-footer text-center font-weight-bolder">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className='items-center gradient-text mt-30 md:mt-30 lg:mt-30 xl:mt-30'>
                    <p>Made with Bubbi &hearts;</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer