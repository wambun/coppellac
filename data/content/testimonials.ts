export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
  date?: string;
  source?: string;
}

// Real Google Reviews - 4.8 stars with 168+ reviews
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Kristi Smith',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'We have used Coppell Heating and Air Conditioning for many years for our residential use. We started using them when we lived in Coppell and kept them when we moved back to Dallas, because they were so reliable, honest, and reasonably priced.',
    rating: 5,
    date: '1 month ago',
    source: 'google',
  },
  {
    id: '2',
    name: 'Farhana Ali',
    role: 'Google Review',
    location: 'Dallas, TX',
    content: 'We had an issue with hot air blowing out of our upstairs AC. Danny came out and found the issue. Due to being an older system, he was honest about charging quite a bit for repair vs changing out the entire system. Danny and Cross were great!',
    rating: 5,
    date: '3 months ago',
    source: 'google',
  },
  {
    id: '3',
    name: 'Robert Van',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'I would highly recommend this company to anyone looking for HVAC services. Cross was the technician who came out, and he was extremely thorough and professional. He took the time to explain what he was doing and why, which I really appreciated.',
    rating: 5,
    date: '3 months ago',
    source: 'google',
  },
  {
    id: '4',
    name: 'James Meier',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'Called in the morning and service tech, Danny, showed up at lunch. I had been having intermittent issues for a while and afraid my units that were 14 years old might be failing. Danny was determined to find the issue and did. Great service!',
    rating: 5,
    date: '2 months ago',
    source: 'google',
  },
  {
    id: '5',
    name: 'Michelle Inzunza-Hall',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'Coppell Heating and Air has been my system maintenance provider. Quick to respond when I\'ve had a few issues come up and always transparent with pricing. Austin is my favorite. Dependable and trustworthy.',
    rating: 5,
    date: '2 months ago',
    source: 'google',
  },
  {
    id: '6',
    name: 'Debbie Kinney',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'Coppell Heating and AC have always been prompt and efficient. We have used them for years at two homes. The annual service contract is great, they always remind me when it\'s time for a check up.',
    rating: 5,
    date: '2 months ago',
    source: 'google',
  },
  {
    id: '7',
    name: 'John Ries',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'Isaac came out and did maintenance on my heating system. He was very professional, thorough, knowledgeable and asked all the questions to make sure I was satisfied heading into the winter. He does a great job and should be commended.',
    rating: 5,
    date: '1 month ago',
    source: 'google',
  },
  {
    id: '8',
    name: 'Lori Dunn',
    role: 'Google Review',
    location: 'Coppell, TX',
    content: 'I called at 3:00 on a Friday afternoon and Isaac came out an hour later and my air was back on. He explained everything and gave me some helpful maintenance tips. My family has been using Coppell Heating and Air for many years and they are always friendly and professional.',
    rating: 5,
    date: '5 months ago',
    source: 'google',
  },
];
