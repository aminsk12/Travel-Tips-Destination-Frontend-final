'use client';

import { Bell } from 'lucide-react';
import React from 'react';
import { Badge } from '@nextui-org/badge';
import NavDropdown from '@/src/app/(withCommonLayout)/_component/ui/navbar/navDropdown';
import Link from 'next/link';
import { useAppSelector } from '@/src/redux/hook';
import { getNotifications } from '@/src/redux/features/message/notificationSlice';
import { motion } from 'framer-motion';

export default function NavRightContent() {
  const notifications = useAppSelector(getNotifications);

  return (
    <div className="flex items-center justify-center gap-5">
      {notifications?.length ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Badge
            as={Link}
            href="/notifications"
            size="md"
            color="danger"
            content={notifications.length}
            shape="circle"
          >
            <Bell />
          </Badge>
        </motion.div>
      ) : (
        <Bell />
      )}
      <NavDropdown />
    </div>
  );
}
