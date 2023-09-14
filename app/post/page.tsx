import { Comments, SideMenu } from '@/components';
import Image from 'next/image';
import React from 'react';

export default function PostPage() {
  return (
    <section className="py-4 text-sm">
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src={'/p1.png'}
              alt="author image"
              className="h-10 w-10 rounded-full"
            />
            <div className="text-xs flex flex-col">
              <p className="font-bold">John Doe</p>
              <p className="text-[10px] text-slate-800 dark:text-slate-200">
                johndoe@gmail.com
              </p>
              <p className="text-[10px] text-slate-800 dark:text-slate-200">
                17 hours ago
              </p>
            </div>
          </div>
        </div>
        <Image
          width={400}
          height={400}
          src={'/p1.png'}
          alt="post image"
          className="h-60 w-full rounded object-cover"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="">
          <p className="p-2 text-xs/relaxed text-slate-800 dark:text-slate-200 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            corporis impedit voluptatum possimus dolorem neque commodi
            asperiores? Accusamus doloribus voluptate provident magni repellat
            nulla incidunt? Itaque harum minus amet. Deleniti soluta optio quam,
            ab obcaecati labore, ad quasi perferendis numquam ut sapiente!
            Eligendi, eum officiis! Quos dicta molestias aperiam error magnam
            porro dolorum fugit facere, aliquam laudantium, repellendus illo
            nulla pariatur quo quod dolor commodi. Nam quo ipsum magni beatae
            minima ab nemo. Laborum fuga ullam quaerat repellat reprehenderit
            praesentium ipsum pariatur ut tempora quas provident, iure eos quos
            id. Voluptas nisi perferendis sed necessitatibus explicabo ratione
            quam at voluptates pariatur nemo placeat asperiores, optio,
            repudiandae quidem ad tempora vitae saepe nobis. Reiciendis facere
            optio ut pariatur, adipisci sequi numquam corporis sunt labore
            voluptate quae veniam. Sunt vero neque sint voluptate incidunt
            doloribus, ab eum illum voluptates eos dolore, fuga iusto totam
            aliquam necessitatibus cupiditate ut nobis. Modi, est voluptatibus
            accusantium eos sint, ad corporis earum similique doloremque culpa
            aut quibusdam! Dicta libero deserunt et accusantium aspernatur,
            labore eaque beatae id quo. Harum enim hic minima veritatis itaque
            officia sapiente assumenda, amet inventore quidem quod at, eum
            exercitationem neque. Beatae tempore vero, a modi inventore ab.
            Iste, nesciunt reiciendis velit quis, laudantium quia quam omnis
            labore eveniet, magnam cumque inventore ex! Nemo vel libero
            voluptatibus. Quae quibusdam iusto odio voluptatibus porro optio
            accusamus minus blanditiis cumque? Vitae voluptas odio officia et
            repellat eius neque magni labore. Praesentium, error quibusdam, ab
            maiores expedita iusto unde ipsa sunt beatae ipsum earum amet omnis?
            Non, quasi laudantium ipsa repudiandae dignissimos sit iusto a
            perferendis deleniti eaque. Facere voluptatum optio laboriosam ea,
            nam voluptates nesciunt cum vel enim ipsa asperiores quae. Nemo
            quibusdam perferendis enim dignissimos cumque unde eius assumenda
            nihil blanditiis vitae, aut porro sit maiores maxime ullam, voluptas
            inventore consectetur omnis quam.
          </p>
          <Comments />
        </div>
        <SideMenu />
      </div>
    </section>
  );
}
