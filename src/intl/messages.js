// @flow

export type MessageType = string | {|
  message: string,
  description: string
|}

/**
 * Enter messages here.
 *
 * Please keep keys valid JavaScript identifiers.
 * Please don't add flow type annotation
 *
 * @type {Object.<string, (string | {message: string, description: string})>}
 */
export const messages: { [messageId: string]: MessageType } = {
  about: {
    message: 'About',
    description: 'About application',
  },
  actionFailed: '{action} failed',
  actualStateVmIsIn: 'The actual state the virtual machine is in.',
  addNewNic: 'Add new NIC',
  addNewSnapshot: 'Add new snapshot',
  addNewVm: 'Create Virtual Machine',
  address: 'Address',
  advancedOptions: {
    message: 'Advanced Options',
    description: 'Label used on forms when there are a set of fields that are initially hidden and require a click to view.',
  },
  alias: {
    message: 'Alias',
    description: 'In sense of "human friendly name"',
  },
  areYouSureYouWantToDeleteDisk: 'Are you sure you want to delete disk {diskName}?',
  areYouSureYouWantToDeleteNic: 'Are you sure you want to delete NIC {nicName}?',
  areYouSureYouWantToDeleteSnapshot: 'Are you sure you want to delete snapshot {snapshotName}?',
  areYouSureYouWantToRestoreSnapshot: 'Are you sure you want to restore snapshot {snapshotName}?',
  authorizationExpired: 'Authorization expired. The page is going to be reloaded to re-login.',
  bootMenu: 'Boot Menu',
  bootMenuTooltip: 'Boot menu allows to select bootable device. It is accessible from a console.',
  bootMenuWarning: 'All changes will take effect after reboot only.',
  bootSequence: 'Boot Sequence',
  bootSequenceTooltip: 'Device order in which VM will search OS for running.',
  cancel: 'Cancel',
  cantLogonToConsole: 'Can\'t logon to console. Do you want to continue?',
  cardTitleDetails: 'Details',
  cardTooltipEditDetails: 'Edit details for {vmId}',
  cd: 'CD',
  cdCanOnlyChangeWhenVmRunning: 'CD can only be changed when the VM is running',
  cdromBoot: 'CD-ROM',
  changeCd: 'Change CD',
  clear: 'Clear',
  clearAll: 'Clear all',
  clearMessages: 'Clear Messages',
  clickForHelp: 'Click for help',
  close: 'Close',
  cloudInit: {
    message: 'Cloud-Init',
    description: 'Name of technology allowing to initialize operating system installation. Most likely not translatable.',
  },
  cloudInitTooltip: 'Set up early initialization of Linux virtual machine using cloud-init.',
  cluster: 'Cluster',
  clusterCanOnlyChangeWhenVmStopped: 'Cluster can only be changed when the VM is stopped.',
  confirmDelete: 'Confirm Delete',
  confirmRestore: 'Confirm Restore',
  connectAutomatically: 'Connect automatically',
  console: 'Console',
  consoleInUseContinue: 'Console in use, continue?',
  containsConfigurationAndDisksWhichWillBeUsedToCreateThisVm: 'Contains the configuration and disks which will be used to create this virtual machine. Please customize as needed.',
  cpus: 'CPUs',
  create: 'Create',
  createANewVm: 'Create A New Virtual Machine',
  created: 'Created',
  createNewDisk: 'Create New Disk',
  createSnapshot: 'Create Snapshot',
  createVm: 'Create VM',
  currentlyInsertedIsoInCdDrive: 'Currently inserted ISO in CD drive',
  customIcon: 'Custom icon of the virtual machine.',
  dataCenter: { message: 'Data Center', description: 'Label for the VM\'s data center' },
  dataCenterChangesWithCluster: 'Data Center cannot be changed directly. It correlates with the Cluster.',
  daysShort: 'd',
  defaultButton: 'Default',
  definedMemory: 'Defined Memory',
  delete: 'Delete',
  description: 'Description',
  details: 'Details',
  diskActionCreateNew: 'Create Disk',
  diskCapacity: 'Disk Capacity',
  diskDeleteDisabledTooltip: 'Cannot delete the Disk at this time',
  diskDeleteTooltip: 'Delete',
  diskLabelBootable: 'bootable',
  diskLabelInactive: 'inactive',
  diskEditDisabledTooltip: 'Cannot edit the Disk at this time',
  diskEditTooltip: 'Edit',
  diskEditorAliasLabel: 'Name',
  diskEditorDiskDeletingTooltip: 'The disk is being deleted.',
  diskEditorFormatCantChangeHelp: 'Disk type cannot be changed after it has been created.',
  diskEditorFormatCreateHelp: 'Once you have selected a disk type, you will not be able to change it.',
  diskEditorFormatLabel: 'Disk Type',
  diskEditorFormatNotAvailable: 'N/A',
  diskEditorFormatOptionRaw: {
    message: 'Preallocated',
    description: 'Select list option for raw / preallocated format disk images',
  },
  diskEditorFormatOptionCow: {
    message: 'Thin Provision',
    description: 'Select list option for qcow / thin provisioned format disk images',
  },
  diskEditorResizeLabel: 'Extend Size By (GiB)',
  diskEditorSizeCantChangeHelp: 'Disk size cannot be extended for this type of disk.',
  diskEditorSizeCreateHelp: 'After you create a disk, you may only extend its size if you make edits.',
  diskEditorSizeLabel: 'Size (GiB)',
  diskEditorStorageDomainCantChangeHelp: 'A disk\'s storage domain cannot be changed after it has been created.',
  diskEditorStorageDomainCreateHelp: 'Once you have selected a storage domain, you will not be able to change it.',
  diskEditorStorageDomainLabel: 'Storage Domain',
  diskEditorStorageDomainNotAvailable: 'N/A',
  diskStateActiveTooltip: 'Active',
  diskStateInactiveTooltip: 'Inactive',
  diskStateLockedTooltip: 'Locked',
  disks: 'Disks',
  disksCardEditTooltip: 'Edit Disks for {vmId}',
  diskSizeHasToBeAPositiveInteger: 'Disk size has to be a positive integer.',
  displayAll: 'Display all',
  edit: 'Edit',
  editDisk: 'Edit Disk',
  editNic: 'Edit NIC',
  editVm: 'Edit the VM',
  empty: 'Empty',
  emptySnapshotDescription: 'Snapshot description is missing.',
  enterVmDescription: 'Enter VM Description (optional)',
  enterVmName: 'Enter VM Name',
  enum_NicInterface_e1000: {
    message: 'e1000',
    description: 'Display name of a NIC that provides an E1000 based interface to the VM',
  },
  enum_NicInterface_rtl8139: {
    message: 'rtl8139',
    description: 'Display name of a NIC that provides a Realtek RTL8139 interface to the VM',
  },
  enum_NicInterface_virtio: {
    message: 'VirtIO',
    description: 'Display name of a NIC that provides a virtio based interface to the VM',
  },
  enum_Switch_off: {
    message: 'OFF',
    description: 'Toggle switch/checkbox Off state label',
  },
  enum_Switch_on: {
    message: 'ON',
    description: 'Toggle switch/checkbox On state label',
  },
  enum_VmStatus_down: {
    message: 'Off',
    description: 'VM is turned off. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_image_locked: {
    message: 'Image locked',
    description: 'Disk image is locked. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_migrating: {
    message: 'Migrating',
    description: 'VM is migrating from one host machine to another host machine. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_paused: {
    message: 'Paused',
    description: 'VM is paused. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_powering_down: {
    message: 'Powering down',
    description: 'VM is being turned off. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_powering_up: {
    message: 'Powering up',
    description: 'VM is starting. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_reboot_in_progress: {
    message: 'Reboot in progress',
    description: 'One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_restoring_state: {
    message: 'Restoring state',
    description: 'Waking up from hibernation. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_saving_state: {
    message: 'Saving state',
    description: 'Being hibernated. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_suspended: {
    message: 'Asleep',
    description: 'Hibernated. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_unassigned: {
    message: 'Unassigned',
    description: 'Error when obtaining virtual machine status. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_unknown: {
    message: 'Unknown',
    description: 'VM is in unknown state. Connection to hypervisor is probably broken. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_up: {
    message: 'Running',
    description: 'VM is running. One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  enum_VmStatus_wait_for_launch: {
    message: 'Waiting for launch',
    description: 'VM is down but planned to started. be One of states of a virtual machine. Other are e.g. Up, Down, Powering-Up',
  },
  errorWhileCreatingNewDisk: 'Error while creating new disk:',
  failedToChangeVmIcon: 'Failed to change VM icon',
  failedToChangeVmIconToDefault: 'Failed to change VM icon to default',
  failedToGetVmConsole: 'Failed to get the VM console',
  failedToRemoveVm: 'Failed to remove the VM',
  failedToRestartVm: 'Failed to restart the VM',
  failedToRetrieveDiskDetails: 'Failed to retrieve disk details',
  failedToRetrieveIsoStorages: 'Failed to retrieve ISO storages',
  failedToRetrieveListOfVmConsoles: 'Failed to retrieve list of VM consoles',
  failedToRetrieveVmConsoleDetails: 'Failed to retrieve VM console details',
  failedToRetrieveVmDetails: 'Failed to retrieve VM details',
  failedToRetrieveVmDisks: 'Failed to retrieve VM disks',
  failedToRetrieveVmIcon: 'Failed to retrieve VM icon',
  failedToShutdownVm: 'Failed to shutdown the VM',
  failedToStartVm: 'Failed to start the VM',
  failedToSuspendVm: 'Failed to suspend the VM',
  firstDevice: 'First Device',
  firstDeviceTooltip: 'First device in order.',
  force: 'Force',
  fqdn: { message: 'FQDN', description: 'Label for the VM guest agent reported full qualified domain name' },
  fullScreen: 'Fullscreen',
  fullyQualifiedDomainName: 'Fully Qualified Domain Name (FQDN) of the virtual machine. Please note, guest agent must be installed within the virtual machine to retrieve this value.',
  gitHub: 'GitHub',
  globalErrorBoundaryTitle: 'Sorry, VM Portal is currently having some issues.',
  globalErrorBoundaryDescription: 'Please refresh the page or log out and log back in. If the issue persists, please report a bug on {bugUrl}',
  groupOfHostsVmCanBeRunningOn: 'Group of hosts the virtual machine can be running on.',
  hdBoot: 'Hard Disk',
  host: { message: 'Host', description: 'Label for host where the VM is running' },
  hostConsole: {
    message: 'Host Console',
    description: 'Label of link to the Cockpit app',
  },
  hostName: 'Hostname',
  hostNameTooltip: 'Virtual Machine hostname.',
  hotPlugConfirmApplyAfterRestart: 'Apply after Restart',
  hotPlugConfirmApplyNow: 'Apply Changes Now',
  hotPlugConfirmContent: 'Apply Changes Now with Hot Plug',
  hotPlugConfirmContentDetail:
  'Applying the changes to CPU and/or Memory can be done right now but it requires ' +
  'doing a hot plug.  You can choose to apply these changes after a restart instead.',
  hotPlugConfirmTitle: 'Apply Changes',
  hoursShort: 'h',
  htmlPleaseReferToDocumentationForMoreInformation: 'Please refer to <a href="{documentationUrl}" target="_blank">documentation</a> for more information.',
  htmlUnsupportedOvirtVersionFoundButVersionAtLeastRequired: '<strong>Unsupported {version} {productName} version,</strong> found but version at least {requiredVersion} is required.',
  icon: 'Icon',
  ifVmIsRunningClickToAccessItsGraphicsConsole: 'If the virtual machine is running, click the protocol name to access its Graphical Console.',
  inPreview: 'In Preview',
  ipAddress: { message: 'IP Address', description: 'Label for IP addresses reported by VM guest agent' },
  isPersistMemorySnapshot: 'Content of the memory of the virtual machine is included in the snapshot.',
  less: {
    message: 'less',
    description: 'more/less pair used to control collapsible long listing',
  },
  loadingTripleDot: {
    message: 'Loading ...',
    description: 'Pending request to the server indicator label.',
  },
  locked: 'Locked',
  logOut: 'Log out',
  lowOVirtVersion: 'SSH keys can not be managed with recent oVirt <strong>{apiVersion}</strong> version. Please upgrade oVirt to <strong>4.2</strong> or higher.',
  mapCtrlAltDelKeyboardShortcutToCtrlAltEnd: 'Map Ctrl + Alt + Del keyboard shortcut to Ctrl + Alt + End',
  memory: 'Memory',
  memoryIncluded: '(State included)',
  messages: 'Messages',
  minutesShort: 'm',
  monthsShort: 'M',
  more: {
    message: 'more',
    description: 'more/less pair used to control collapsible long listing',
  },
  name: {
    message: 'Name',
    description: 'Virtual machine name',
  },
  network: 'Network',
  networkBoot: 'Network (PXE)',
  new: {
    message: 'New',
    description: 'New disk',
  },
  newNic: {
    message: 'New',
    description: 'New NIC',
  },
  newSnapshot: 'New snapshot',
  nextRunConfirmActionSave: 'Save Changes',
  nextRunConfrimActionSaveRestart: 'Save Changes and Restart',
  nextRunConfirmContent: 'Some Configuration Changes Will Be Applied on Restart',
  nextRunConfirmContentDetail:
    'Some configuration changes will not be able to take effect until the ' +
    'Virtual Machine is restarted next.  A power cycle needs to take place to ' +
    'pick up this new configuration.',
  nextRunConfirmTitle: 'Configuration Change on Restart',
  nextSnapshotsWillBeDeleted: 'Restoring this snapshot will also delete newer snapshots:',
  nic: 'Network interfaces',
  nicActionCreateNew: 'Create NIC',
  nicCardEditTooltip: 'Edit NICs for {vmId}',
  nicDeleteDisabledTooltip: 'Cannot delete the NIC at this time',
  nicDeleteTooltip: 'Delete',
  nicEditDisabledTooltip: 'Cannot edit the NIC at this time',
  nicEditTooltip: 'Edit',
  nicEditorNameLabel: 'Name',
  nicEditorInterfaceLabel: 'Type',
  nicEditorInterfaceCantEditHelp: 'A NIC\'s type can only be changed when the VM is stopped.',
  nicEditorLinkStateLabel: 'Link State',
  nicEditorLinkStateDown: 'Down',
  nicEditorLinkStateUp: 'Up',
  nicIP4: { message: 'IPv4', description: 'Label for the IPv4 addresses reported on a Nic' },
  nicIP6: { message: 'IPv6', description: 'Label for the IPv6 addresses reported on a Nic' },
  nicLinkDownTooltip: 'Link is Down',
  nicLinkUpTooltip: 'Link is Up',
  nicNoVnicAssigned: 'N/A',
  nicsTooltip: 'Connected VM network interfaces.',
  noActiveStorageDomainInDataCenter: 'There is no active data storage domain in data center "{dataCenterName}"',
  noDisks: 'no disks',
  noError: 'No error',
  noMessages: 'There are no notifications to display.',
  noNetwork: 'No network',
  noNics: 'no NICs',
  noSnapshots: 'no snapshots',
  notAvailable: {
    message: 'N/A',
    description: 'Displayed when a value is not available in the VM\'s state',
  },
  notAvailableUntilRunning: {
    message: 'This field is only available when the VM is running.',
    description: 'Tooltip displayed next to \'notAvailable\' for fields that require the VM to be up',
  },
  notAvailableUntilRunningAndGuestAgent: {
    message: 'This field is only available when the VM is running and the guest agent is installed and running.',
    description: 'Tooltip displayed next to \'notAvailable\' for fields that require the VM to be up and a running guest agent',
  },
  notEditableForPoolsOrPoolVms: 'Not editable for Pools or pool VMs.',
  noVmAvailable: 'No VM available.',
  noVmAvailableForLoggedUser: 'No VM is available for the logged user.',
  off: 'Off',
  ok: 'OK',
  on: 'On',
  openProtocolConsole: 'Open {protocol} Console',
  operatingSystem: 'Operating System',
  operatingSystemInstalledOnVm: 'Operating system installed on the virtual machine.',
  optimizedFor: 'Optimized For',
  optionalUserDescriptionOfVm: 'Optional user description of the virtual machine.',
  options: 'Options',
  permissionsNoCreateVm: 'You do not have the required permissions to create a new VM.',
  permissionsNoEditVm: 'You do not have the required permissions to edit a VM.',
  permissionsNoEditThisVm: 'You do not have permissions to edit VM {name} / {vmId}',
  pendingChanges: 'Pending Changes',
  pleaseEnterValidVmName: 'Please enter valid virtual machine name. Only lower-case and upper-case letters, numbers, \'_\', \'-\', \'.\' are allowed.',
  pleaseLogIn: 'Please log in',
  pleaseLogInTripleDot: 'Please log in ...',
  preserveDisks: 'Preserve disks',
  publicSSHKey: 'Specify public key for access to guest serial console via SSH authentication.',
  reboot: {
    message: 'Reboot',
    description: 'Toolbar button to reboot a VM',
  },
  rebootVm: 'Reboot the VM',
  rebootVmQuestion: 'Are you sure you want to Restart the VM?',
  refresh: {
    message: 'Refresh',
    description: 'Reload data from server',
  },
  remove: 'Remove',
  removeVm: 'Remove the VM',
  removeVmQustion: 'Remove the VM?',
  restore: {
    message: 'Restore',
    description: 'Confirmation modal action button label for a Restore operation',
  },
  run: 'Run',
  save: 'Save',
  secondDevice: 'Second Device',
  secondDeviceTooltip: 'Second device in order.',
  secondsShort: 's',
  shutdown: 'Shutdown',
  shutdownVm: 'Shutdown the VM',
  shutdownVmQuestion: 'Are you sure you want to Shutdown the VM?',
  size: {
    message: 'Size',
    description: '... of disk of virtual machine',
  },
  smartcardEnabled: 'Smartcard enabled:',
  snapshot: 'Snapshots',
  snapshotRestore: 'Restore Snapshot',
  snapshotDelete: 'Delete Snapshot',
  snapshotInfo: 'All attached disks will be included in the snapshot. Content of memory will be included only if VM is running.',
  snapshotsTooltip: 'VM snapshots.',
  sshAuthorizedKeys: 'SSH Authorized Keys',
  sshAuthorizedKeysTooltip: 'New line separated public SSH keys allowing for passwordless remote login.',
  SSHKey: 'SSH Key',
  startVm: 'Start the VM',
  state: 'State',
  status: 'Status',
  storageConnectedToVm: 'Storage connected to the virtual machine.',
  storageDomain: {
    message: 'Storage domain',
    description: 'An entity in the system where disks of virtual machines are stored. Abstraction of external file/block storages.',
  },
  suspend: 'Suspend',
  suspendVm: 'Suspend the VM',
  suspendVmQuestion: 'Are you sure you want to Suspend the VM?',
  template: 'Template',
  timeAgo: '{time} ago',
  thisOperationCantBeUndone: 'This operation cannot be undone.',
  totalCountOfVirtualProcessorsVmWillBeEquippedWith: 'Total count of virtual processors the virtual machine will be equipped with.',
  totalMemoryVmWillBeEquippedWith: 'Total memory the virtual machine will be equipped with.',
  typeOfWorkloadVmConfigurationIsOptimizedFor: 'Type of workload the virtual machine configuration is optimized for.',
  uniqueNameOfTheVirtualMachine: 'Unique name of the virtual machine.',
  unknown: {
    message: 'unknown',
    description: 'followed by "version" to create "unknown version"',
  },
  unknownDatacenter: {
    message: 'unknown',
    description: 'unknown data center',
  },
  unsavedChangesConfirmMessage: {
    message: 'Are you sure you want to drop your changes?',
    description: 'Message in the modal dialog opened when a user tried to navigate off an editor page after changes have been made.',
  },
  unsavedChangesTitle: {
    message: 'Dialog contains unsaved changes',
    description: 'Title of modal dialog opened when a user tried to navigate off an editor page after changes have been made.',
  },
  updateVm: 'Update VM',
  upload: 'Upload',
  uploadIconFilesizeTooLarge: 'Image size should be {maxIconSize} KiB or less.',
  uploadIconNotImage: 'Icon should be an image.',
  useCtrlAltEnd: 'Use Ctrl+Alt+End',
  virtualMachines: 'Virtual Machines',
  vmHasPendingConfigurationChanges: 'The virtual machine has pending configuration changes. To take effect, please reboot the virtual machine.',
  vmMemory: 'VM Memory',
  vmPortal: 'VM Portal',
  vmType_desktop: 'Desktop',
  vmType_highPerformance: 'High Performance',
  vmType_server: 'Server',
  vnicProfile: 'VNIC Profile',
  vnicProfileEmpty: '<Empty>',
  yearsShort: 'y',
  yes: 'Yes',
}

export type MessageIdType = $Keys<typeof messages>
