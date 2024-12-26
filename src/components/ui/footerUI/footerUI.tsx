import { Mail } from '@/public/assets/mail';
import { Telegram } from '@/public/assets/telegram';
import { Vk } from '@/public/assets/vk';
import {
  cn,
  Container,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/src/shared';
import { FC } from 'react';

interface FooterUIProps {
  className?: string;
}

export const FooterUI: FC<FooterUIProps> = ({ className }) => {
  return (
    <footer className={cn(className, '')}>
      <Container className='flex justify-center gap-4 items-center'>
        <a
          className='hover:scale-105 transition-all hover:text-primary'
          href='https://t.me/AnsaksS'
          target='_blank'
        >
          <Telegram />
        </a>
        <a
          className='hover:scale-105 transition-all hover:text-primary'
          href='https://vk.com/id46614753'
          target='_blank'
        >
          <Vk />
        </a>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='hover:scale-105 transition-all hover:text-primary'>
              <a href='mailto:coach.anosov.fh@gmail.com'>
                <Mail />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>coach.anosov.fh@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Container>
    </footer>
  );
};
