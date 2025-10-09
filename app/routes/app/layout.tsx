import React from 'react';
import { Outlet, useNavigate } from 'react-router';

import { paths } from '~/config/path';

export default function AppLayout() {
  const navigate = useNavigate();

  // TODO: Replace with proper authentication by useUser()
  const isAuthenticated = false;
  const isLoading = false;

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(paths.auth.login.getHref(paths.app.root.path));
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
}
