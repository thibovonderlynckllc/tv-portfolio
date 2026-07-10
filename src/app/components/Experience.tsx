'use client';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const workExperience = [
  {
    label: 'INTERNSHIP',
    role: 'Front-end Dev & UI/UX Designer',
    company: 'Ask Maeve',
    location: 'Ghent',
    period: '16/02/26 – 06/06/26',
    bullets: [
      'Complete UI/UX design and development of website',
      'Testing & debugging of the web application',
    ],
  },
  {
    label: 'STAGE',
    role: 'Front-end Dev & UI/UX Designer',
    company: 'Storything',
    location: 'Kortrijk',
    period: '11/03/24 – 14/06/24',
    bullets: [
      'Website built via Webflow',
      'UI/UX design for Zoomers',
    ],
  },
];

const education = [
  {
    degree: 'MCT',
    full: 'Multimedia & Creative Technology',
    school: 'Howest',
    location: 'Kortrijk',
    period: '2024 – 2026',
    description: 'In-depth knowledge of frameworks, backend, and cloud technologies for web solutions.',
  },
  {
    degree: 'WDD',
    full: 'Web Dev & Design',
    school: 'Howest',
    location: 'Kortrijk',
    period: '2022 – 2024',
    description: 'Basic knowledge of HTML, CSS, JavaScript, and UI/UX with Adobe XD and Photoshop.',
  },
];

const Experience = () => {
  return (
    <div className="w-full bg-neutral-950 py-16 sm:py-20 md:py-24" id="experience">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SectionTitle>Experience & Education</SectionTitle>
        <motion.p
          className="text-center text-base sm:text-lg mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto text-neutral-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional journey from education to real-world web development experience.
        </motion.p>

        {/*
          Single flat grid: 2 cols on desktop.
          Columns headers go in row 1, then cards pair up in row 2 and row 3.
          CSS grid stretches each row to the tallest item, so cards in the same
          row will always be identical height.
        */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-24">

          {/* ── Column headers ── */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4 text-orange-500" />
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Work Experience</h3>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-orange-500" />
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-white">Education</h3>
          </motion.div>

          {/* ── Row 1: INTERNSHIP | MCT ── */}
          {/* Work item 0 */}
          <motion.div
            className="flex gap-4 sm:gap-6 pb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center shrink-0">
              <div className="w-3 h-3 rounded-full border-2 border-orange-500 bg-neutral-900 mt-1.5" />
              <div className="w-px flex-1 mt-2 bg-gradient-to-b from-orange-500/50 to-transparent" />
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 bg-neutral-900/80 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 rounded-xl p-5 sm:p-6 transition-all duration-300 group">
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">{workExperience[0].label}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{workExperience[0].role}</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500/70" />
                    {workExperience[0].company}, {workExperience[0].location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                    {workExperience[0].period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {workExperience[0].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education item 0 */}
          <motion.div
            className="lg:flex hidden gap-4 sm:gap-6 pb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center shrink-0">
              <div className="w-3 h-3 rounded-full border-2 border-orange-500 bg-neutral-900 mt-1.5" />
              <div className="w-px flex-1 mt-2 bg-gradient-to-b from-orange-500/50 to-transparent" />
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 bg-neutral-900/80 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 rounded-xl p-5 sm:p-6 transition-all duration-300">
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">{education[0].degree}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{education[0].full}</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500/70" />
                    {education[0].school}, {education[0].location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                    {education[0].period}
                  </span>
                </div>
                <p className="text-sm text-neutral-300">{education[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Row 2: STAGE | WDD ── */}
          {/* Work item 1 */}
          <motion.div
            className="flex gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center shrink-0">
              <div className="w-3 h-3 rounded-full border-2 border-orange-500 bg-neutral-900 mt-1.5" />
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 bg-neutral-900/80 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 rounded-xl p-5 sm:p-6 transition-all duration-300 group">
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">{workExperience[1].label}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{workExperience[1].role}</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500/70" />
                    {workExperience[1].company}, {workExperience[1].location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                    {workExperience[1].period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {workExperience[1].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education item 1 */}
          <motion.div
            className="lg:flex hidden gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center shrink-0">
              <div className="w-3 h-3 rounded-full border-2 border-orange-500 bg-neutral-900 mt-1.5" />
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 bg-neutral-900/80 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 rounded-xl p-5 sm:p-6 transition-all duration-300">
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">{education[1].degree}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{education[1].full}</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-sm text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-500/70" />
                    {education[1].school}, {education[1].location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                    {education[1].period}
                  </span>
                </div>
                <p className="text-sm text-neutral-300">{education[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* ── Mobile: Education section (shown only on mobile, stacked after work) ── */}
          <div className="lg:hidden mt-10">
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4 text-orange-500" />
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Education</h3>
            </motion.div>

            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                className={`flex gap-4 sm:gap-6 ${i < education.length - 1 ? 'pb-8' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-3 h-3 rounded-full border-2 border-orange-500 bg-neutral-900 mt-1.5" />
                  {i < education.length - 1 && <div className="w-px flex-1 mt-2 bg-gradient-to-b from-orange-500/50 to-transparent" />}
                </div>
                <div className="flex-1 bg-neutral-900/80 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 rounded-xl p-5 sm:p-6 transition-all duration-300">
                  <div className="mb-2">
                    <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">{item.degree}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{item.full}</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-sm text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500/70" />
                      {item.school}, {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-orange-500/70" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
