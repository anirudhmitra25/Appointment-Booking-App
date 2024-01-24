export function formatTimeRange(start_time: string, end_time: string): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
    };
  
    const startTime = new Date(start_time);
    const endTime = new Date(end_time);
  
    const formattedStartTime = startTime.toLocaleTimeString("en-US", options);
    const formattedEndTime = endTime.toLocaleTimeString("en-US", options);
  
    const output = `${formattedStartTime}-${formattedEndTime}`;
  
    return output;
  }