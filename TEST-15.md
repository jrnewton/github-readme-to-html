# Container image with malware and crypto miner for testing purposes

[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/malware-cryptominer-container)](https://artifacthub.io/packages/search?repo=malware-cryptominer-container)
[![Container build](https://github.com/ruzickap/malware-cryptominer-container/actions/workflows/container-build.yml/badge.svg)](https://github.com/ruzickap/malware-cryptominer-container/actions/workflows/container-build.yml)
![Docker Image Size (latest semver)](https://img.shields.io/docker/image-size/peru/malware-cryptominer-container?logo=docker&logoColor=white&sort=semver)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ruzickap/malware-cryptominer-container?logo=github&sort=semver)](https://github.com/ruzickap/malware-cryptominer-container/releases/latest)

![Ransomware](https://raw.githubusercontent.com/MISP/intelligence-icons/52d597bf00d58b92ee8809802b507c6d0755235f/svg/ransomware.svg)
![Malware](https://raw.githubusercontent.com/MISP/intelligence-icons/513abc840b7ac92e4f8a4a7ecab2964007bf25f5/svg/malware.svg)
![Threat Actor](https://raw.githubusercontent.com/MISP/intelligence-icons/513abc840b7ac92e4f8a4a7ecab2964007bf25f5/svg/threat_actor.svg)

- [Container image with malware and crypto miner for testing purposes](#container-image-with-malware-and-crypto-miner-for-testing-purposes)
  - [Deployment of the vulnerable image](#deployment-of-the-vulnerable-image)
    - [CloudFormation - EC2 instance](#cloudformation---ec2-instance)
    - [Amazon ECS](#amazon-ecs)
    - [Amazon EKS](#amazon-eks)
  - [Scanner tests](#scanner-tests)
  - [Verify image integrity](#verify-image-integrity)
  - [Local tests](#local-tests)

I decided to build minimal [nginx](https://hub.docker.com/_/nginx) based
[container image](https://quay.io/repository/petr_ruzicka/malware-cryptominer-container?tab=tags&tag=latest)
which contains malware / ransomware / crypto miner / ...

Security tools should be able to scan the image and discover harmful files.

> Running/starting the [container image](https://quay.io/repository/petr_ruzicka/malware-cryptominer-container?tab=tags)
> do not "activate" / "execute" the malware.

- Container Image:
  - [quay.io/petr_ruzicka/malware-cryptominer-container:3](https://quay.io/petr_ruzicka/malware-cryptominer-container:3)
- Container Registry:
  - <https://quay.io/repository/petr_ruzicka/malware-cryptominer-container?tab=tags>
- Container build pipeline:
  - <https://github.com/ruzickap/malware-cryptominer-container/actions/workflows/container-build.yml>
- Dockerfile used for building the container:
  - <https://github.com/ruzickap/malware-cryptominer-container/blob/main/Dockerfile>

The malware files inside container image were downloaded from:

- [eicar](https://www.eicar.org/download-anti-malware-testfile/)
- [xmrig](https://xmrig.com/)
- <https://github.com/Da2dalus/The-MALWARE-Repo>
- <https://github.com/timb-machine/linux-malware>
- <https://github.com/antonioCoco/ConPtyShell>
- <https://github.com/HonbraDev/fractureiser-samples>

The malware/crypto miner files are located in the `/usr/share/nginx/html`
directory:

```text
/usr/share/nginx/html
├── eicar
│   ├── eicar.com                        [EICAR virus test files]
│   ├── eicar.com.txt                    [EICAR virus test files]
│   └── eicarcom2.zip                    [Zip archive data, at least v1.0 to extract]
├── malware
│   ├── ILOVEYOU.vbs                     [C source, ASCII text]
│   ├── Invoke-ConPtyShell.ps1           [ASCII text, with very long lines (361)]
│   ├── L0Lz.bat                         [DOS batch file, ASCII text]
│   ├── Linux.Trojan.Multiverze.elf.x86  [ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), statically linked, with debug_info, not stripped]
│   ├── MadMan.exe                       [MS-DOS executable, MZ for MS-DOS]
│   ├── Melissa.doc                      [Composite Document File V2 Document, Little Endian, Os: Windows, Version 4.10, Code page: 1252, Title: Password List for March 26th 1999, Subject: Adult Website Passwords, Author: John Holmes, Keywords: 73 sites in this list, Comments: Password List for March 26th 1999, Template: Normal.dot, Last Saved By: Him, Revision Number: 2, Name of Creating Application: Microsoft Word 8.0, Create Time/Date: Fri Mar 26 11:39:00 1999, Last Saved Time/Date: Fri Mar 26 11:39:00 1999, Number of Pages: 2, Number of Words: 745, Number of Characters: 4249, Security: 0]
│   ├── Py.Trojan.NecroBot.py            [Python script, ASCII text executable, with very long lines (4330), with CRLF line terminators]
│   ├── Trojan.Java.Fractureiser.MTB.jar [Java archive data (JAR)]
│   ├── TrojanSpy.MacOS.XCSSET.A.bin     [Mach-O 64-bit x86_64 executable, flags:<NOUNDEFS|DYLDLINK|TWOLEVEL|PIE>]
│   ├── Txt.Malware.Sustes.sh            [Bourne-Again shell script, ASCII text executable]
│   ├── Unix.Downloader.Rocke.sh         [POSIX shell script, ASCII text executable]
│   ├── Unix.Malware.Kaiji.elf.arm       [ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked, Go, stripped]
│   ├── Unix.Trojan.Mirai.elf.m68k       [ELF 32-bit MSB executable, Motorola m68k, 68020, version 1 (SYSV), statically linked, stripped]
│   ├── Unix.Trojan.Mirai.elf.mips       [ELF 32-bit MSB executable, MIPS, MIPS-I version 1 (SYSV), statically linked, not stripped]
│   ├── Unix.Trojan.Mirai.elf.ppc        [ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, not stripped]
│   ├── Unix.Trojan.Mirai.elf.sparc      [ELF 32-bit MSB executable, SPARC, version 1 (SYSV), statically linked, not stripped]
│   ├── Unix.Trojan.Mirai.elf.x86_64     [ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux), statically linked, stripped]
│   ├── Unix.Trojan.Spike.elf.arm        [ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, for GNU/Linux 2.6.16, with debug_info, not stripped]
│   ├── Walker.com                       [DOS executable (COM), start instruction 0xe9cd04e8 5400e871]
│   ├── WannaCry.exe                     [PE32 executable (GUI) Intel 80386, for MS Windows, 4 sections]
│   ├── Win.Trojan.Perl.perl             [Perl script text executable]
│   └── Zloader.xlsm                     [Microsoft Excel 2007+]
└── xmrig
    ├── my-xmrig                         [ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, stripped]
    ├── xmrig                            [ELF 64-bit LSB executable, x86-64, version 1 (SYSV), statically linked, stripped]
    └── xmrig-linux-static-x64.tar.gz    [gzip compressed data, from Unix, original size modulo 2^32 8291840]
```

List of malware/ransomware/crypto miner files:

- [eicar](https://secure.eicar.org/eicar.com)
  [EICAR virus test files]
  - [Virustotal](https://www.virustotal.com/gui/file/275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f/)
- [xmrig](https://xmrig.com/)
  [ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, stripped]
  - [Virustotal](https://www.virustotal.com/gui/file/0ad68d5804804c25a6f6f3d87cc3a3886583f69b7115ba01ab7c6dd96a186404)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/0ad68d5804804c25a6f6f3d87cc3a3886583f69b7115ba01ab7c6dd96a186404)
- [ILOVEYOU.vbs](https://github.com/Da2dalus/The-MALWARE-Repo/blob/master/Email-Worm/ILOVEYOU.vbs)
  [C source, ASCII text]
  - [Virustotal](https://www.virustotal.com/gui/file/556700ac50ffa845e5de853498242ee5abb288eb5b8ae1ae12bfdb5746e3b7b1)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/556700ac50ffa845e5de853498242ee5abb288eb5b8ae1ae12bfdb5746e3b7b1)
- [Invoke-ConPtyShell.ps1](https://github.com/antonioCoco/ConPtyShell/blob/master/Invoke-ConPtyShell.ps1)
  [ASCII text, with very long lines (361)]
  - [Virustotal](https://www.virustotal.com/gui/file/90a17fd47fe1042cd86ae32fba8d9a5ccdef6162578d9c384fe534112700fb64)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/90a17fd47fe1042cd86ae32fba8d9a5ccdef6162578d9c384fe534112700fb64)
- [L0Lz.bat](https://github.com/Da2dalus/The-MALWARE-Repo/blob/master/Trojan/L0Lz.bat)
  [DOS batch file, ASCII text]
  - [Virustotal](https://www.virustotal.com/gui/file/fc94130b45112bdf7fe64713eb807f4958cdcdb758c25605ad9318cd5a8e17ae)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/fc94130b45112bdf7fe64713eb807f4958cdcdb758c25605ad9318cd5a8e17ae)
- [Linux.Trojan.Multiverze.elf.x86](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Linux.Trojan.Multiverze/0a5a7008fa1a17c8ee32ea4e2f7e25d7302f9dfc4201c16d793a1d03f95b9fa5.elf.x86)
  [ELF 32-bit LSB executable, Intel 80386, version 1 (SYSV), ...]
  - [Virustotal](https://www.virustotal.com/gui/file/0a5a7008fa1a17c8ee32ea4e2f7e25d7302f9dfc4201c16d793a1d03f95b9fa5)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/0a5a7008fa1a17c8ee32ea4e2f7e25d7302f9dfc4201c16d793a1d03f95b9fa5)
- [MadMan.exe](https://github.com/Da2dalus/The-MALWARE-Repo/raw/master/Virus/MadMan.exe)
  [MS-DOS executable]
  - [Virustotal](https://www.virustotal.com/gui/file/17d81134a5957fb758b9d69a90b033477a991c8b0f107d9864dc790ca37e6a23)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/17d81134a5957fb758b9d69a90b033477a991c8b0f107d9864dc790ca37e6a23)
- [Melissa.doc](https://github.com/Da2dalus/The-MALWARE-Repo/blob/master/Virus/Melissa.doc)
  [Composite Document File V2 Document, Little Endian, Os: Windows, Version
  4.10, ...]
  - [Virustotal](https://www.virustotal.com/gui/file/554701bc874da646285689df79e5002b3b1a1f76daf705bea9586640026697ca)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/554701bc874da646285689df79e5002b3b1a1f76daf705bea9586640026697ca)
- [Py.Trojan.NecroBot.py](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Py.Trojan.NecroBot/0e600095a3c955310d27c08f98a012720caff698fe24303d7e0dcb4c5e766322.py)
  [Python script, ASCII text executable, with very long lines (4330), with CRLF
  ...]
  - [Virustotal](https://www.virustotal.com/gui/file/0e600095a3c955310d27c08f98a012720caff698fe24303d7e0dcb4c5e766322)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/0e600095a3c955310d27c08f98a012720caff698fe24303d7e0dcb4c5e766322)
- [Trojan:Java/Fractureiser!MTB](https://github.com/HonbraDev/fractureiser-samples/raw/221bcc4bf45d5896f8908b21d5a8f3e7fcbc2875/stage-0-infected-DisplayEntityEditor-1.0.4.jar)
  [Java archive data (JAR)]
  - [Virustotal](https://www.virustotal.com/gui/file/d79874c1a0040cb29418343c766d2f6c69cf8fa5ecd0629cac7cc60d69c4f107)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/d79874c1a0040cb29418343c766d2f6c69cf8fa5ecd0629cac7cc60d69c4f107)
- [TrojanSpy.MacOS.XCSSET.A](https://github.com/Da2dalus/The-MALWARE-Repo/blob/master/Trojan/XCSSETMacMalware/TrojanSpy.MacOS.XCSSET.A.6614978ab256f922d7b6dbd7cc15c6136819f4bcfb5a0fead480561f0df54ca6)
  [Mach-O 64-bit x86_64 executable, flags:<NOUNDEFS|DYLDLINK|...>]
  - [Virustotal](https://www.virustotal.com/gui/file/6614978ab256f922d7b6dbd7cc15c6136819f4bcfb5a0fead480561f0df54ca6)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/6614978ab256f922d7b6dbd7cc15c6136819f4bcfb5a0fead480561f0df54ca6)
- [Txt.Malware.Sustes.sh](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Txt.Malware.Sustes/0e77291955664d2c25d5bfe617cec12a388e5389f82dee5ae4fd5c5d1f1bdefe.sh)
  [Bourne-Again shell script, ASCII text executable]
  - [Virustotal](https://www.virustotal.com/gui/file/0e77291955664d2c25d5bfe617cec12a388e5389f82dee5ae4fd5c5d1f1bdefe)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/0e77291955664d2c25d5bfe617cec12a388e5389f82dee5ae4fd5c5d1f1bdefe)
- [Unix.Downloader.Rocke.sh](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Downloader.Rocke/228ec858509a928b21e88d582cb5cfaabc03f72d30f2179ef6fb232b6abdce97.sh)
  [POSIX shell script, ASCII text executable]
  - [Virustotal](https://www.virustotal.com/gui/file/228ec858509a928b21e88d582cb5cfaabc03f72d30f2179ef6fb232b6abdce97)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/228ec858509a928b21e88d582cb5cfaabc03f72d30f2179ef6fb232b6abdce97)
- [Unix.Malware.Kaiji.elf.arm](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Malware.Kaiji/3e68118ad46b9eb64063b259fca5f6682c5c2cb18fd9a4e7d97969226b2e6fb4.elf.arm)
  [ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked,
  ...]
  - [Virustotal](https://www.virustotal.com/gui/file/3e68118ad46b9eb64063b259fca5f6682c5c2cb18fd9a4e7d97969226b2e6fb4)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/3e68118ad46b9eb64063b259fca5f6682c5c2cb18fd9a4e7d97969226b2e6fb4)
- [Unix.Trojan.Mirai.elf.m68k](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Trojan.Mirai/11242cdb5dac9309a2f330bd0dad96efba9ccc9b9d46f2361e8bf8e4cde543c1.elf.m68k)
  [ELF 32-bit MSB executable, Motorola m68k, 68020, version 1 (SYSV), ...]
  - [Virustotal](https://www.virustotal.com/gui/file/11242cdb5dac9309a2f330bd0dad96efba9ccc9b9d46f2361e8bf8e4cde543c1)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/11242cdb5dac9309a2f330bd0dad96efba9ccc9b9d46f2361e8bf8e4cde543c1)
- [Unix.Trojan.Mirai.elf.mips](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Trojan.Mirai/faa0deaba42ba76192609c5d2f59664e871c7bc68ebb5d99c91bf8ea4ddb8ea5.elf.mips)
  [ELF 32-bit MSB executable, MIPS, MIPS-I version 1 (SYSV), statically linked,
  ...]
  - [Virustotal](https://www.virustotal.com/gui/file/faa0deaba42ba76192609c5d2f59664e871c7bc68ebb5d99c91bf8ea4ddb8ea5)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/faa0deaba42ba76192609c5d2f59664e871c7bc68ebb5d99c91bf8ea4ddb8ea5)
- [Unix.Trojan.Mirai.elf.ppc](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Trojan.Mirai/d5230c95c4af4e1fcddf9660070932b7876a9569dc3a2baedf762abbe37b1ad5.elf.ppc)
  [ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV),
  ...]
  - [Virustotal](https://www.virustotal.com/gui/file/d5230c95c4af4e1fcddf9660070932b7876a9569dc3a2baedf762abbe37b1ad5)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/d5230c95c4af4e1fcddf9660070932b7876a9569dc3a2baedf762abbe37b1ad5)
- [Unix.Trojan.Mirai.elf.sparc](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Trojan.Mirai/190333b93af51f9a3e3dc4186e4f1bdb4f92c05d3ce047fbe5c3670d1b5a87b4.elf.sparc)
  [ELF 32-bit MSB executable, SPARC, version 1 (SYSV), statically linked, ...]
  - [Virustotal](https://www.virustotal.com/gui/file/190333b93af51f9a3e3dc4186e4f1bdb4f92c05d3ce047fbe5c3670d1b5a87b4)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/190333b93af51f9a3e3dc4186e4f1bdb4f92c05d3ce047fbe5c3670d1b5a87b4)
- [Unix.Trojan.Mirai.elf.x86_64](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Trojan.Mirai/40e8d9d82800728a5f1cfc2c2e156d5ee72fb44c54c26a86cfd35e95ea737e37.elf.x86_64)
  [ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux), statically linked,
  ...]
  - [Virustotal](https://www.virustotal.com/gui/file/40e8d9d82800728a5f1cfc2c2e156d5ee72fb44c54c26a86cfd35e95ea737e37)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/40e8d9d82800728a5f1cfc2c2e156d5ee72fb44c54c26a86cfd35e95ea737e37)
- [Unix.Trojan.Spike.elf.arm](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Unix.Trojan.Spike/04d88a0f5ffa8da57cfd9b1ae6e4fd9758610a3de72688516b258b5564735476.elf.arm)
  [ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked,
  ...]
  - [Virustotal](https://www.virustotal.com/gui/file/04d88a0f5ffa8da57cfd9b1ae6e4fd9758610a3de72688516b258b5564735476)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/04d88a0f5ffa8da57cfd9b1ae6e4fd9758610a3de72688516b258b5564735476)
- [Walker.com](https://github.com/Da2dalus/The-MALWARE-Repo/blob/master/Virus/Walker.com)
  [DOS executable (COM)]
  - [Virustotal](https://www.virustotal.com/gui/file/b87b48dcbf779b06c6ca6491cd31328cf840578d29a6327b7a44f9043ce1eb07)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/b87b48dcbf779b06c6ca6491cd31328cf840578d29a6327b7a44f9043ce1eb07)
- [WannaCry.exe](https://github.com/Da2dalus/The-MALWARE-Repo/raw/master/Ransomware/WannaCry.exe)
  [PE32 executable (GUI) Intel 80386, for MS Windows]
  - [Virustotal](https://www.virustotal.com/gui/file/be22645c61949ad6a077373a7d6cd85e3fae44315632f161adc4c99d5a8e6844)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/be22645c61949ad6a077373a7d6cd85e3fae44315632f161adc4c99d5a8e6844)
- [Win.Trojan.Perl.perl](https://github.com/timb-machine/linux-malware/raw/main/malware/binaries/Win.Trojan.Perl/9aed7ab8806a90aa9fac070fbf788466c6da3d87deba92a25ac4dd1d63ce4c44.perl)
  [Perl script text executable]
  - [Virustotal](https://www.virustotal.com/gui/file/9aed7ab8806a90aa9fac070fbf788466c6da3d87deba92a25ac4dd1d63ce4c44)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/9aed7ab8806a90aa9fac070fbf788466c6da3d87deba92a25ac4dd1d63ce4c44)
- [Zloader.xlsm](https://github.com/Da2dalus/The-MALWARE-Repo/blob/master/Banking-Malware/Zloader.xlsm)
  [Microsoft Excel 2007+]
  - [Virustotal](https://www.virustotal.com/gui/file/90c03a8ca35c33aad5e77488625598da6deeb08794e6efc9f1ddbe486df33e0c)
  - [Hybrid Analysis](https://www.hybrid-analysis.com/sample/90c03a8ca35c33aad5e77488625598da6deeb08794e6efc9f1ddbe486df33e0c)

## Deployment of the vulnerable image

There are several ways how to run the "malware container image" and there are
few of them.

> Note: Running the container image is not harmful for the host system.

### CloudFormation - EC2 instance

Run the EC2 instance with docker and the [quay.io/petr_ruzicka/malware-cryptominer-container](https://quay.io/repository/petr_ruzicka/malware-cryptominer-container?tab=tags)
container with SSM enabled (only console access):

```bash
export AWS_DEFAULT_REGION="eu-central-1"

aws cloudformation deploy --capabilities CAPABILITY_IAM \
  --stack-name "${USER}-malware-cryptominer-container-ec2" \
  --parameter-overrides "ContainerImage=quay.io/petr_ruzicka/malware-cryptominer-container:3" \
  --template-file EC2InstanceWithDockerSample.yaml \
  --tags "Name=${USER}-malware-cryptominer-container-ec2"

# aws cloudformation delete-stack --stack-name ${USER}-malware-cryptominer-container-ec2
```

### Amazon ECS

[Copilot](https://aws.amazon.com/blogs/containers/introducing-aws-copilot/)
example:

```bash
export AWS_DEFAULT_REGION="eu-central-1"

copilot init --app "${USER}-malware-cryptominer-app" --name "${USER}-malware-cryptominer" \
  --image quay.io/petr_ruzicka/malware-cryptominer-container:3 \
  --type 'Load Balanced Web Service' --port 8080 --deploy

# copilot app delete --name "${USER}-malware-cryptominer-app"
```

### Amazon EKS

Run simple [Amazon EKS](https://aws.amazon.com/eks/) cluster with "malware pod":

```bash
export AWS_DEFAULT_REGION="eu-central-1"
export CLUSTER_NAME="${USER}-malware-cryptominer-eks"
export KUBECONFIG="/tmp/kubeconfig-${CLUSTER_NAME}.conf"

eksctl create cluster --name "${CLUSTER_NAME}" --instance-types t3a.small --kubeconfig "${KUBECONFIG}"
kubectl run malware-cryptominer --image=quay.io/petr_ruzicka/malware-cryptominer-container:3

# eksctl delete cluster --name "${CLUSTER_NAME}"
```

## Scanner tests

Details from various scanner tests (Aqua, Trivy, Prisma Cloud, Wiz.io, Grype,
Snyk) can be found in [Scanner tests](./docs/scanner-tests.md)

## Verify image integrity

```bash
CONTAINER_REGISTRY_IMAGE_NAME="quay.io/petr_ruzicka/malware-cryptominer-container"
CONTAINER_IMAGE_TAG="3"
CONTAINER_IMAGE_DIGEST=$(regctl image digest "${CONTAINER_REGISTRY_IMAGE_NAME}:${CONTAINER_IMAGE_TAG}")
CONTAINER_REGISTRY_IMAGE="${CONTAINER_REGISTRY_IMAGE_NAME}@${CONTAINER_IMAGE_DIGEST}"
COSIGN_CERTIFICATE_IDENTITY_REGEXP="https://github.com/ruzickap/malware-cryptominer-container/.github/workflows"
COSIGN_CERTIFICATE_OIDC_ISSUER="https://token.actions.githubusercontent.com"
COSIGN_ATTESTATION_TYPE="https://cyclonedx.org/bom"
CONTAINER_IMAGE_PLATFORMS="linux/amd64,linux/arm64"

# Verify the manifest list is signed
cosign verify \
  --certificate-identity-regexp="${COSIGN_CERTIFICATE_IDENTITY_REGEXP}" \
  --certificate-oidc-issuer="${COSIGN_CERTIFICATE_OIDC_ISSUER}" \
  "${CONTAINER_REGISTRY_IMAGE}" | jq --color-output

# Verify if every platfrom image manifest is signed
while read -r MANIFEST_DIGESTS; do
  cosign verify \
    --certificate-identity-regexp="${COSIGN_CERTIFICATE_IDENTITY_REGEXP}" \
    --certificate-oidc-issuer="${COSIGN_CERTIFICATE_OIDC_ISSUER}" \
    "${CONTAINER_REGISTRY_IMAGE_NAME}@${MANIFEST_DIGESTS}" | jq --color-output
done <<< "$(regctl manifest get "${CONTAINER_REGISTRY_IMAGE}" --format '{{jsonPretty .}}' | jq -r '.manifests[].digest')"

cosign verify-attestation --type="${COSIGN_ATTESTATION_TYPE}" \
  --certificate-oidc-issuer="${COSIGN_CERTIFICATE_OIDC_ISSUER}" \
  --certificate-identity-regexp="${COSIGN_CERTIFICATE_IDENTITY_REGEXP}" \
  "${CONTAINER_REGISTRY_IMAGE}" | jq --color-output '.payload |= .[:2000] + "...<rest_is_removed>..."' --color-output

cosign verify-attestation --type="${COSIGN_ATTESTATION_TYPE}" \
  --certificate-oidc-issuer="${COSIGN_CERTIFICATE_OIDC_ISSUER}" \
  --certificate-identity-regexp="${COSIGN_CERTIFICATE_IDENTITY_REGEXP}" \
  "${CONTAINER_REGISTRY_IMAGE}" | jq '.payload | @base64d | fromjson | .predicate' | grype

for PLATFORM in ${CONTAINER_IMAGE_PLATFORMS//,/ }; do
  cosign download attestation --platform="${PLATFORM}" --predicate-type="${COSIGN_ATTESTATION_TYPE}" \
    "${CONTAINER_REGISTRY_IMAGE}" | jq -r .payload | base64 -d | jq .predicate | grype --add-cpes-if-none
done

cosign verify-attestation --type="slsaprovenance" \
  --certificate-oidc-issuer="${COSIGN_CERTIFICATE_OIDC_ISSUER}" \
  --certificate-identity-regexp='^https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_container_slsa3.yml@refs/tags/v[0-9]+.[0-9]+.[0-9]+$' \
  "${CONTAINER_REGISTRY_IMAGE}" | jq --color-output

slsa-verifier verify-image --print-provenance --source-uri "github.com/ruzickap/malware-cryptominer-container" \
  "${CONTAINER_REGISTRY_IMAGE}" | jq --color-output

cosign tree "${CONTAINER_REGISTRY_IMAGE}"
```

## Local tests

Container build:

```bash
docker build . -t malware-cryptominer-container
```

Run container and download the malware file:

```bash
docker run -it --rm -p 8080:8080 malware-cryptominer-container

curl http://localhost:8080/eicar/
```

Debug container:

```bash
docker run -it --rm --entrypoint=/bin/sh --user root malware-cryptominer-container
```

Run in Kubernetes:

```bash
kubectl run malware-cryptominer --image=quay.io/petr_ruzicka/malware-cryptominer-container:3
```
