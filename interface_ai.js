function requestsPerMinuteLastHour(logs) {
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

  // Filter logs to only last hour
  const recentLogs = logs.filter(log => {
    const logTime = new Date(log.timestamp);
    return logTime >= oneHourAgo && logTime <= now;
  });

  // Group by minute
  const counts = {};
  recentLogs.forEach(log => {
    const logTime = new Date(log.timestamp);
    // Format key as "YYYY-MM-DD HH:MM"
    const minuteKey = logTime.toISOString().slice(0, 16);
    counts[minuteKey] = (counts[minuteKey] || 0) + 1;
  });

  return counts;
}
