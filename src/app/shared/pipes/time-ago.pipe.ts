import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const currentTime = new Date();
    const publishTime = new Date(value);

    const elapsedSeconds = Math.floor((currentTime.getTime() - publishTime.getTime()) / 1000);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds}s ago`;
    } else if (elapsedSeconds < 3600) {
      const minutes = Math.floor(elapsedSeconds / 60);
      return `${minutes}m ago`;
    } else if (elapsedSeconds < 86400) {
      const hours = Math.floor(elapsedSeconds / 3600);
      return `${hours}h ago`;
    } else if (elapsedSeconds < 604800) {
      // Less than 7 days
      const days = Math.floor(elapsedSeconds / 86400);
      return `${days}d ago`;
    } else if (elapsedSeconds < 31536000) {
      // Less than 1 year
      const weeks = Math.floor(elapsedSeconds / 604800);
      return `${weeks}w ago`;
    } else {
      // More than or equal to 1 year
      const year = publishTime.getFullYear();
      const months = publishTime.toLocaleString('default', { month: 'long' });
      const day = publishTime.getDate();
      return `${day} ${months} ${year}`;
    }
  }
}
