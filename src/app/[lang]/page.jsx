import { getDictionary } from './dictionaries';
import Link from 'next/link';
export default async function Page({
  params
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <main className="pt-[100px] px-10 flex flex-col gap-10 max-w-4xl">
      <section>
        <h1 className="text-lg"> {dict.content.name} </h1>
        <p className="text-zinc-500 text-mid">{dict.content.location}</p>
      </section>

      <section>
        <h2 className="">{dict.titles.currentSituation}</h2>
        <p className="text-zinc-500 text-mid">
          {' '}
          {dict.content.currentJob.text}
          <a
            className="text-zinc-500 hover:text-zinc-400  underline underline-offset-3 "
            href="https://www.qgood.net/"
            target='_blank'
          >
            {dict.content.currentJob.link}
          </a>
          
        </p>
      </section>

      <section>
        <h2>{dict.titles.previousExperience}</h2>
        <p className="text-zinc-500 text-mid">
          {dict.content.previousJobs[0].text}
          <a
            className="text-zinc-500 hover:text-zinc-400  underline underline-offset-3 "
            target="_blank"
            href="https://tdigital.com.ar/"
            
          >
            {dict.content.previousJobs[0].link}
          </a>
        </p>
        
        <p className="text-zinc-500 text-mid">
          {dict.content.previousJobs[1].text}
          <a
            className="text-zinc-500 hover:text-zinc-400  underline underline-offset-3 "
            target="_blank"
            href="https://dairaitgroup.com.ar/"
          >
            {dict.content.previousJobs[1].link}
          </a>
        </p>
      </section>

      <section>
        <h2 className='text-mid'>{dict.titles.education}</h2>
        <p className="text-zinc-500 text-mid">
         {dict.content.education}
        </p>
      </section>

      <section>
        <h2>{dict.titles.interests}</h2>

        <ul className="text-zinc-500 text-mid">
          {dict.content.interests.map(item => {
            return <li className='text-mid' key={item}>{item}</li>
          })}
        </ul>
      </section>

      <section>
        <h2>{dict.titles.contact}</h2>
        <p className="text-zinc-500 text-mid">
          {dict.content.contactText}
          <a
            className="text-zinc-500 underline underline-offset-3 "
            href="https://www.linkedin.com/in/faustosavoya/"
            target='_blank'

          >
            LinkedIn
          </a>
        </p>
      </section>

      <section className="">
        <h2>{dict.titles.additionalNetworks}</h2>

          {dict.content.networks.map(item => {
            return <a
            className="text-zinc-500 hover:text-zinc-400  underline underline-offset-3 mr-6 text-mid"
            href={item.link}
            target='_blank'
          >
            {item.name}
          </a>
          })}
        
      </section>
    </main>
  );
}
