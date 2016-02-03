# Ansible playbook for WordPress

This playbook was written for CentOS VMs from DigitalOcean, so some
modification may be necessary for use elsewhere.

The Ansible invocation is performed by the `bin/create` wrapper
script.  Running that will prompt you for the hostname, SSH key, and
passwords which are passed to Ansible.  *Note:* passwords for CentOS
users
[must be provided to Ansible pre-crypted](http://docs.ansible.com/ansible/faq.html#how-do-i-generate-crypted-passwords-for-the-user-module)
using mkpasswd on Linux or a
[variant](https://github.com/nlf/mkpasswd) on other platforms.

If provisioning fails, the configuration is written to disk.  Delete
it immediately if you don’t want to try again, since it will contain
passwords in plain-text.

## Prerequisites

- Ansible 2.x.x
