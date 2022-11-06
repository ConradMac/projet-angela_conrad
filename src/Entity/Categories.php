<?php

namespace App\Entity;

use App\Repository\CategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriesRepository::class)]
class Categories
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    // #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'parent')]
    // #[ORM\JoinColumn(nullable: false)]
    // private ?self $categories = null;

    #[ORM\OneToMany(mappedBy: 'categories', targetEntity: self::class)]
    private Collection $parent;

    #[ORM\Column(length: 255)]
    private ?string $images = null;

    #[ORM\OneToMany(mappedBy: 'categories', targetEntity: Services::class)]
    private Collection $services;

    public function __construct()
    {
        $this->parent = new ArrayCollection();
        $this->services = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    // public function getCategories(): ?self
    // {
    //     return $this->categories;
    // }

    // public function setCategories(?self $categories): self
    // {
    //     $this->categories = $categories;

    //     return $this;
    // }

    /**
     * @return Collection<int, self>
     */
    public function getParent(): Collection
    {
        return $this->parent;
    }

    // public function addParent(self $parent): self
    // {
    //     if (!$this->parent->contains($parent)) {
    //         $this->parent->add($parent);
    //         $parent->setCategories($this);
    //     }

    //     return $this;
    // }

    // public function removeParent(self $parent): self
    // {
    //     if ($this->parent->removeElement($parent)) {
    //         // set the owning side to null (unless already changed)
    //         if ($parent->getCategories() === $this) {
    //             $parent->setCategories(null);
    //         }
    //     }

    //     return $this;
    // }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(string $images): self
    {
        $this->images = $images;

        return $this;
    }

    /**
     * @return Collection<int, Services>
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Services $service): self
    {
        if (!$this->services->contains($service)) {
            $this->services->add($service);
            $service->setCategories($this);
        }

        return $this;
    }

    public function removeService(Services $service): self
    {
        if ($this->services->removeElement($service)) {
            // set the owning side to null (unless already changed)
            if ($service->getCategories() === $this) {
                $service->setCategories(null);
            }
        }

        return $this;
    }
    public function __toString()
    {
        return $this->name;
    }
}
