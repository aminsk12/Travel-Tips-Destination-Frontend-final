import { Avatar } from '@nextui-org/avatar';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Amin Sk',
    role: 'Founder',
    imageUrl: 'https://res.cloudinary.com/dlmmd8a0k/image/upload/v1729568624/zbdm3mgtesunxpex7rhl.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Kamrun Naher Lipi',
    role: 'Co Founder',
    imageUrl: 'https://res.cloudinary.com/dlmmd8a0k/image/upload/v1731129283/WhatsApp_Image_2024-11-09_at_10.44.08_AM_grro9r.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sahina Sultana',
    role: 'Web Developer',
    imageUrl: 'https://res.cloudinary.com/dlmmd8a0k/image/upload/v1731129534/WhatsApp_Image_2024-11-09_at_10.48.35_AM_co7bur.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Sakwat Kazi ',
    role: 'UI Designer',
    imageUrl: 'https://res.cloudinary.com/dlmmd8a0k/image/upload/v1721996947/samples/people/smiling-man.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-default-50 text-center">
      <h3 className="text-pink-600 font-semibold uppercase mb-4 text-xs md:text-sm">
        Team Members
      </h3>
      <h2 className="text-xl md:text-2xl font-bold mb-8">Meet the Crew</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="max-w-xs bg-default-50 shadow-md rounded-lg p-6 flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{ delay: index * 0.1, duration: 0.5 }} // Staggered entrance
          >
            <div className="w-32 h-32 rounded-full overflow-hidden bg-default-100">
              <Avatar
                size="sm"
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-default-500">{member.role}</p>
            </div>
            <div className="flex space-x-4 text-default-500">
              <a href={member.socialLinks.facebook} aria-label="Facebook">
                <FaFacebook className="text-pink-500" size={20} />
              </a>
              <a href={member.socialLinks.twitter} aria-label="Twitter">
                <FaTwitter className="text-pink-500" size={20} />
              </a>
              <a href={member.socialLinks.instagram} aria-label="Instagram">
                <FaInstagram className="text-pink-500" size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
