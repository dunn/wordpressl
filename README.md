# Ansible playbook for WordPress

This playbook was written for CentOS VMs from DigitalOcean, so some
modification may be necessary for use elsewhere.

The Ansible invocation is performed by the `bin/create` wrapper
script.  Running that will prompt you for the hostname, SSH key, and
passwords which are passed to Ansible.

If provisioning fails, the configuration is written to disk.  Delete
it immediately if you don’t want to try again, since it will contain
passwords in plain-text.

## Prerequisites

- Ansible 2.x.x
