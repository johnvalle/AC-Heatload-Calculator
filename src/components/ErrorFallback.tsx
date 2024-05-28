export const ErrorFallback = () => {
  return (
    <div>
      <p>Oops, something went wrong.</p>
      <p>Let's try that again.</p>
      <button onClick={() => window.location.assign(window.location.origin)}>Go back</button>
    </div>
  );
};
