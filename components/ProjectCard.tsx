import Link from 'next/link';
import React from 'react'
export interface ProjectCardProps {
    name: string;
    type: string;
    id?: number;
    description: string;
    links: string;
    imgs: {
        webp: string;
        jpg: string;
        alt: string;
    }


}
function ProjectCard({name, links, type, description, imgs}:ProjectCardProps) {
  return (
      <div className='w-1/3'>
          
            <h2 className='text-3xl font-semibold text-center text-emerald-600'>{name} [{type}]</h2>
          <p>{description}</p>
          <picture>
              <source type='image/webp' srcSet={imgs.webp} />
              <img src={imgs.jpg} alt={imgs.alt} />
          </picture>
            <div>
              {links && <Link href={links}>See Website</Link>}
            </div>
          </div>
  )
}

export default ProjectCard